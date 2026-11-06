import { useEffect, useRef, useState } from 'react';

const PARTICLE_COUNT = 240;
const TARGETS = 'a, button, h1, h2, h3, .project-visual, .service-row, .experience-row, .about-intro, .tags span, [data-meteor-border]';

function borderPoint(rect, fraction, offset) {
  const padding = 12;
  const left = rect.left - padding;
  const top = rect.top - padding;
  const width = rect.width + padding * 2;
  const height = rect.height + padding * 2;
  let distance = fraction * (width + height) * 2;
  if (distance < width) return [left + distance, top - offset];
  distance -= width;
  if (distance < height) return [left + width + offset, top + distance];
  distance -= height;
  if (distance < width) return [left + width - distance, top + height + offset];
  return [left - offset, top + height - (distance - width)];
}

export default function MeteorField() {
  const canvasRef = useRef(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const allowed = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    if (!context || !enabled) return undefined;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let frame = 0;
    let lastTime = 0;
    let active = false;
    let target = null;
    const galaxy = document.querySelector('.galaxy-scene');
    const galaxyDisc = galaxy?.querySelector('.galaxy-disc');
    let coreGlow = 0;
    const pointer = { x: width / 2, y: height / 2 };
    const particles = Array.from({ length: PARTICLE_COUNT }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      fraction: index / PARTICLE_COUNT,
      phase: Math.random() * Math.PI * 2,
      spread: Math.random(),
      speed: 3 + Math.random() * 5,
      size: 0.45 + Math.random() * 0.65,
      orbit: null,
      captureAfter: 0,
    }));
    // Cache soft meteor sprites once instead of creating gradients every frame.
    const sprites = ['#bba5ff', '#8ce5ff', '#ffd0a0'].map(color => {
      const sprite = document.createElement('canvas');
      sprite.width = 96;
      sprite.height = 24;
      const brush = sprite.getContext('2d');
      const trail = brush.createLinearGradient(0, 12, 80, 12);
      trail.addColorStop(0, 'transparent');
      trail.addColorStop(0.7, color + '66');
      trail.addColorStop(1, color);
      brush.fillStyle = trail;
      brush.beginPath();
      brush.moveTo(0, 12);
      brush.lineTo(80, 9);
      brush.lineTo(80, 15);
      brush.closePath();
      brush.fill();
      const glow = brush.createRadialGradient(80, 12, 0, 80, 12, 11);
      glow.addColorStop(0, '#ffffff');
      glow.addColorStop(0.18, color);
      glow.addColorStop(1, 'transparent');
      brush.fillStyle = glow;
      brush.fillRect(69, 1, 23, 23);
      return sprite;
    });
    const clear = () => context.clearRect(0, 0, width, height);
    const stop = () => {
      active = false;
      target = null;
      cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
      clear();
    };
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const findTarget = () => {
      const element = document.elementFromPoint(pointer.x, pointer.y);
      target = element?.closest('[data-meteor-ignore]') ? null : element?.closest(TARGETS);
    };
    const respawn = (particle, seconds) => {
      const drift = seconds * (35 + particle.spread * 45);
      particle.x = -60;
      particle.y = Math.random() * height;
      const wrap = (value, span) => ((value % span) + span) % span;
      particle.fraction = wrap(particle.x + 80 - drift, width + 160) / (width + 160);
      particle.phase = wrap(particle.y + 80 - drift * 0.65, height + 160) / (height + 160) * Math.PI * 2;
      particle.orbit = null;
      particle.captureAfter = seconds + 8;
    };
    const draw = time => {
      frame = 0;
      if (!active || !allowed.matches || document.hidden) return;
      const elapsed = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 1 / 60;
      lastTime = time;
      const rect = target?.isConnected ? target.getBoundingClientRect() : null;
      const seconds = time / 1000;
      // Use the rendered disc's transform so the gravity follows its tilt,
      // responsive size, and position while the page scrolls.
      let gravity = null;
      if (galaxyDisc && galaxy.classList.contains('galaxy-running')) {
        const bounds = galaxyDisc.getBoundingClientRect();
        if (bounds.top < height && bounds.bottom > 0) {
          const matrix = new DOMMatrixReadOnly(getComputedStyle(galaxyDisc).transform);
          gravity = {
            x: bounds.left + bounds.width / 2,
            y: bounds.top + bounds.height / 2,
            radius: Math.min(galaxyDisc.offsetWidth, galaxyDisc.offsetHeight) * 0.48,
            matrix,
            inverse: matrix.inverse(),
          };
        }
      }
      let captured = particles.filter(particle => particle.orbit).length;
      clear();
      particles.forEach((particle, index) => {
        let x;
        let y;
        let fade = 1;
        if (particle.orbit && !gravity) respawn(particle, seconds);
        if (gravity && !rect && !particle.orbit && index % 7 === 0 && captured < 6 && seconds > particle.captureAfter) {
          const local = gravity.inverse.transformPoint({ x: particle.x - gravity.x, y: particle.y - gravity.y });
          const radius = Math.hypot(local.x, local.y);
          if (radius > gravity.radius * 0.35 && radius < gravity.radius * 1.1 && Math.random() < elapsed * 1.4) {
            particle.orbit = { radius, angle: Math.atan2(local.y, local.x) };
            captured += 1;
          }
        }
        if (particle.orbit && gravity) {
          const orbit = particle.orbit;
          orbit.radius *= Math.exp(-0.58 * elapsed);
          // Match the galaxy's counterclockwise rotation and accelerate inward.
          orbit.angle -= elapsed * (0.75 + 1.8 * (1 - Math.min(orbit.radius / gravity.radius, 1)));
          const position = gravity.matrix.transformPoint({ x: Math.cos(orbit.angle) * orbit.radius, y: Math.sin(orbit.angle) * orbit.radius });
          x = gravity.x + position.x;
          y = gravity.y + position.y;
          fade = Math.min(1, orbit.radius / 24);
          if (orbit.radius < 5) {
            coreGlow = Math.min(1, coreGlow + 0.6);
            respawn(particle, seconds);
            return;
          }
        } else if (rect) {
          // Stable ordering avoids crossing the content as the border circulates.
          const fraction = (particle.fraction + seconds * 0.012) % 1;
          const offset = (particle.spread - 0.5) * 15 + Math.sin(seconds * 2 + particle.phase) * 3;
          [x, y] = borderPoint(rect, fraction, offset);
        } else {
          // Diagonal meteor shower continues even while the pointer is still.
          const drift = seconds * (35 + particle.spread * 45);
          x = (particle.fraction * (width + 160) + drift) % (width + 160) - 80;
          y = (particle.phase / (Math.PI * 2) * (height + 160) + drift * 0.65) % (height + 160) - 80;
          if (Math.abs(x - particle.x) > width * 0.75 || Math.abs(y - particle.y) > height * 0.75) {
            particle.x = x;
            particle.y = y;
          }
        }
        const ease = particle.orbit ? 1 : 1 - Math.exp(-particle.speed * elapsed);
        const dx = (x - particle.x) * ease;
        const dy = (y - particle.y) * ease;
        particle.x += dx;
        particle.y += dy;
        if (particle.x < -80 || particle.x > width + 80 || particle.y < -80 || particle.y > height + 80) return;
        const angle = Math.hypot(dx, dy) > 0.05 ? Math.atan2(dy, dx) : 0.58;
        const size = particle.size * (particle.orbit ? 0.85 * Math.max(0.25, fade) : rect ? 0.65 : 1);
        context.save();
        context.translate(particle.x, particle.y);
        context.rotate(angle);
        context.globalAlpha = particle.orbit ? fade * 0.95 : rect ? 0.85 : 0.55;
        context.drawImage(sprites[index % sprites.length], -40 * size, -6 * size, 48 * size, 12 * size);
        context.restore();
      });
      coreGlow = Math.max(0, coreGlow - elapsed * 1.5);
      if (gravity && coreGlow > 0) {
        context.save();
        context.globalAlpha = coreGlow * 0.5;
        context.drawImage(sprites[2], 69, 1, 23, 23, gravity.x - 28, gravity.y - 28, 56, 56);
        context.restore();
      }
      frame = requestAnimationFrame(draw);
    };
    const move = event => {
      if (event.pointerType !== 'mouse' || !allowed.matches || document.hidden) return;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      findTarget();
      active = true;
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const leave = event => { if (!event.relatedTarget) target = null; };
    const start = () => {
      if (!allowed.matches || document.hidden) return;
      active = true;
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const changePreference = () => { if (!allowed.matches) stop(); else start(); };
    const visibility = () => { if (document.hidden) stop(); else start(); };
    resize();
    start();
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerout', leave);
    window.addEventListener('blur', stop);
    window.addEventListener('focus', start);
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', findTarget, { passive: true });
    document.addEventListener('visibilitychange', visibility);
    allowed.addEventListener('change', changePreference);
    return () => {
      stop();
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerout', leave);
      window.removeEventListener('blur', stop);
      window.removeEventListener('focus', start);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', findTarget);
      document.removeEventListener('visibilitychange', visibility);
      allowed.removeEventListener('change', changePreference);
    };
  }, [enabled]);

  return <>
    <canvas className="meteor-field" ref={canvasRef} aria-hidden="true" />
    <button className="meteor-field-toggle" type="button" data-meteor-ignore aria-pressed={enabled} onClick={() => setEnabled(value => !value)}>
      Meteors: {enabled ? 'on' : 'off'}
    </button>
  </>;
}
