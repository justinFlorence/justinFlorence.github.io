import ProjectCard from '@/components/ProjectCard';
import { GitHubProject } from '@/types/project';
import Image from 'next/image'; // Add this import

async function getProjects(): Promise<GitHubProject[]> {
  const res = await fetch('https://api.github.com/users/justinflorence/repos');
  if (!res.ok) throw new Error('Failed to fetch projects');
  return res.json();
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="max-w-6xl mx-auto px-4 py-24 min-h-screen">
      <div className="fixed -z-10 inset-0">
        <Image
          src="/images/space-bg.jpg"
          alt="Space background"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: GitHubProject) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
