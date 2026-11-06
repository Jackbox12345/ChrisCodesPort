import { useEffect, useRef, useState } from 'react';

// Seeded sampling gives the galaxy dense, natural-looking dust without changing
// its layout on rerenders. Only whole layers rotate, not thousands of JS objects.
const random = index => {
  const value = Math.sin(index * 127.1 + 311.7) * 43758.5453;
  return value - Math.floor(value);
};
const point = (radius, arm, offset = 0) => {
  const angle = arm * Math.PI / 2 + Math.log(radius / 10) * 1.8 + offset;
  return [200 + Math.cos(angle) * radius, 200 + Math.sin(angle) * radius];
};
const arms = Array.from({ length: 4 }, (_, arm) =>
  Array.from({ length: 100 }, (_, step) => {
    const [x, y] = point(10 + step * 1.8, arm);
    return `${step ? 'L' : 'M'} ${x.toFixed(2)} ${y.toFixed(2)}`;
  }).join(' '),
);
const stars = Array.from({ length: 4000 }, (_, index) => {
  const seed = index * 11 + 1;
  const sample = random(seed);
  let x;
  let y;
  let radius;
  if (index < 2800) {
    radius = 14 + Math.sqrt(sample) * 174;
    const scatter = (random(seed + 1) + random(seed + 2) - 1) * 0.38;
    [x, y] = point(radius, index % 4, scatter);
  } else {
    // A diffuse disc and warm central cluster soften the spiral boundaries.
    radius = index < 3600 ? Math.sqrt(sample) * 190 : Math.pow(sample, 1.4) * 58;
    const angle = random(seed + 1) * Math.PI * 2;
    x = 200 + Math.cos(angle) * radius;
    y = 200 + Math.sin(angle) * radius;
  }
  const bright = random(seed + 3);
  return {
    x, y,
    size: bright > 0.97 ? 1.05 : 0.18 + Math.pow(bright, 2) * 0.65,
    color: radius < 50 ? '#ffe6b3' : index % 4 ? '#dce7ff' : '#a8c9ff',
    opacity: 0.2 + random(seed + 4) * 0.7,
  };
});
export default function Galaxy() {
  const sceneRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(sceneRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sceneRef} className={`galaxy-scene hero-enter${visible && !paused ? ' galaxy-running' : ''}`}>
      <div aria-hidden="true">
        <div className="galaxy-halo" />
        <div className="galaxy-disc">
          <svg className="galaxy-arms" viewBox="0 0 400 400">
            {arms.map((path, index) => <path key={index} d={path} />)}
          </svg>
          <svg className="galaxy-stars" viewBox="0 0 400 400">
            {stars.map((star, index) => <circle key={index} cx={star.x} cy={star.y} r={star.size} fill={star.color} opacity={star.opacity} />)}
          </svg>
          <div className="galaxy-core" />
        </div>

      </div>
      <div className="galaxy-coordinate">
        <span>A UNIVERSE OF POSSIBILITIES</span>
        <button className="galaxy-toggle" type="button" aria-pressed={paused} onClick={() => setPaused(value => !value)}>
          {paused ? 'Resume galaxy' : 'Pause galaxy'}
        </button>
      </div>
    </div>
  );
}

