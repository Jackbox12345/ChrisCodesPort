import { projects } from '../../data/portfolioData';

export const statuses = ['Planned', 'In progress', 'Showcase'] as const;
export type Status = typeof statuses[number];
export type Project = { id: string; title: string; category: string; description: string; status: Status; due: string; image?: string; tech: string[] };
export type Task = { id: string; title: string; projectId: string; done: boolean };
export type Activity = { id: string; text: string; time: string };
export type Workspace = { version: 1; projects: Project[]; tasks: Task[]; activity: Activity[] };
export const storageKey = 'chriscodes.workspace.v1';
export const initialWorkspace = (): Workspace => ({
  version: 1,
  projects: projects.map((project, index) => ({ id: `project-${index}`, title: project.title, category: project.category, description: project.detail, status: 'Showcase', due: '', image: project.image, tech: project.tech })),
  tasks: projects.map((project, index) => ({ id: `task-${index}`, title: `Draft a case study for ${project.title}`, projectId: `project-${index}`, done: false })),
  activity: [],
});

export function validWorkspace(value: unknown): value is Workspace {
  if (!value || typeof value !== 'object') return false;
  const data = value as Workspace;
  return data.version === 1 && Array.isArray(data.projects) && Array.isArray(data.tasks) && Array.isArray(data.activity)
    && data.projects.every(p => p && typeof p.id === 'string' && typeof p.title === 'string' && typeof p.category === 'string' && typeof p.description === 'string' && statuses.includes(p.status) && typeof p.due === 'string' && Array.isArray(p.tech) && p.tech.every(t => typeof t === 'string') && (p.image === undefined || typeof p.image === 'string'))
    && data.tasks.every(t => t && typeof t.id === 'string' && typeof t.title === 'string' && typeof t.projectId === 'string' && typeof t.done === 'boolean')
    && data.activity.every(a => a && typeof a.id === 'string' && typeof a.text === 'string' && typeof a.time === 'string');
}

export function loadWorkspace(): { data: Workspace; warning: string } {
  try {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return { data: initialWorkspace(), warning: '' };
    const parsed: unknown = JSON.parse(saved);
    if (!validWorkspace(parsed)) throw new Error('Invalid workspace');
    // Use current bundled asset URLs, so saved projects survive rebuilds.
    const seed = initialWorkspace();
    return { data: { ...parsed, projects: parsed.projects.map(p => ({ ...p, image: seed.projects.find(item => item.id === p.id)?.image })) }, warning: '' };
  } catch {
    return { data: initialWorkspace(), warning: 'Saved workspace could not be loaded. Showing the starter workspace; export any changes you want to keep.' };
  }
}
