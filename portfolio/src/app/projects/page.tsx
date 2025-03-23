import ProjectCard from '@/components/ProjectCard';
import { GitHubProject } from '@/types/project';

async function getProjects(): Promise<GitHubProject[]> {
  const res = await fetch('https://api.github.com/users/justinFlorence/repos');
  if (!res.ok) throw new Error('Failed to fetch projects');
  return res.json();
}

export default async function Projects() {
  const projects: GitHubProject[] = await getProjects();

  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: GitHubProject) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
