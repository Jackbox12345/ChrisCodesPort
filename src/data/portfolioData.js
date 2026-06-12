import { AiOutlineCode, AiOutlineTool } from 'react-icons/ai';
import { BsStars } from 'react-icons/bs';
import heroPreview from '../assets/images/sample2.png';
import heroImage from '../assets/images/bg2.jpg';
import ticketPreview from '../assets/images/sample.png';

export const hero = {
  eyebrow: 'IT Full Stack Developer',
  name: 'Christian Lapitan',
  intro:
    'I build practical React experiences for websites, dashboards, and workflow tools that need to feel fast, direct, and easy to use.',
  background: heroImage,
};

export const stats = [
  { value: '03+', label: 'Years building' },
  { value: '08+', label: 'Tools used' },
  { value: '100%', label: 'Curious' },
];

export const skills = [
  'React',
  'JavaScript',
  'Tailwind CSS',
  'Laravel',
  'HTML',
  'CSS',
  'Git',
  'API Integration',
  'Responsive UI',
];

export const experience = [
  {
    year: '2023 - Present',
    role: 'IT Junior Programmer',
    company: 'BPO Company',
    detail:
      'Builds and maintains internal tools, improves everyday workflows, and supports production issues with a practical, user-first mindset.',
  },
  {
    year: '2020',
    role: 'Developer',
    company: 'Capstone Project',
    detail:
      'Shipped a full academic software project from planning through presentation, strengthening fundamentals in programming, teamwork, and delivery.',
  },
];

export const projects = [
  {
    title: 'Ticket Dashboard',
    category: 'IT Tools',
    image: ticketPreview,
    detail:
      'A helpdesk analytics dashboard that visualizes ticket activity, category distribution, active tickets, resolver rankings, and resolution performance using charts and summary cards.',
    tech: ['React', 'CSS', 'Responsive Design'],
  },
  {
    title: 'Hero Tracker',
    category: 'HR Tools',
    image: heroPreview,
    detail:
      'A web-based HR tracking dashboard for managing employee history records, including sanctions, suspensions, long leaves, AWOL cases, separations, exit interviews, and case reviews.',
    tech: ['React', 'API Data', 'Dashboard UI'],
  },
];

export const services = [
  {
    icon: AiOutlineCode,
    title: 'Frontend Builds',
    detail: 'Responsive interfaces with reusable components, strong rhythm, and clear information design.',
  },
  {
    icon: AiOutlineTool,
    title: 'Workflow Tools',
    detail: 'Small business and internal tools that reduce repetitive work and make teams faster.',
  },
  {
    icon: BsStars,
    title: 'Interface Polish',
    detail: 'Sharper spacing, states, hierarchy, and micro-interactions that make a product feel finished.',
  },
];

export const contactLinks = [
  {
    label: 'Email Christian',
    href: 'mailto:lapitanchristian258@gmail.com',
    type: 'email',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/christian-lapitan-5383b3299',
    type: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Jackbox12345',
    type: 'github',
  },
];
