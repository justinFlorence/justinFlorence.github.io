import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { GitHubProject } from '@/types/project';

interface ProjectCardProps {
  project: GitHubProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {project.description || 'No description provided'}
      </p>
      <div className="flex items-center justify-between">
        <Link
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
        >
          <FaGithub />
          View on GitHub
        </Link>
        {project.homepage && (
          <Link
            href={project.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            Live Demo
          </Link>
        )}
      </div>
    </div>
  );
}
