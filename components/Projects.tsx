import type { Project } from '@/lib/types/sanityTypes';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface ProjectsProps {
  projects: Project[];
}

export const Projects = ({
  projects,
}: ProjectsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {projects.map((project) => (
        <Card
          key={project._id}
          className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-default h-full"
        >
          <CardContent className="p-4 h-full flex flex-col">
            {/* Fixed-ratio image area so all cards line up */}
            <div className="relative w-full aspect-[16/9] mb-4">
              <Image
                src={project.imageUrl}
                alt={project.name}
                fill
                className="rounded-lg object-cover"
              />
            </div>

            {/* Content fills the remaining space */}
            <div className="flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-medium text-lg">
                  {project.name}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {project.tech}
                </p>
              </div>

              <div className="flex gap-3 mt-2">
                {/* Live Demo */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:opacity-90 cursor-pointer"
                  >
                    Live Demo
                  </Button>
                </a>

                {/* GitHub */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-800"
                  >
                    GitHub
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
