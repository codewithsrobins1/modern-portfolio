'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Project } from '@/lib/types/sanityTypes';

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface ProjectsProps {
  projects: Project[];
}

function secondaryChip(base?: string) {
  return [
    'inline-flex items-center rounded-full px-4 py-2 text-xs ring-1 transition',
    'bg-black/5 dark:bg-white/5 text-zinc-700 dark:text-white/70 ring-black/10 dark:ring-white/10',
    'group-hover:bg-black/10 dark:group-hover:bg-white/10',
    base,
  ]
    .filter(Boolean)
    .join(' ');
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <motion.div
          key={project._id}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.2, ease: easeOut }}
          className="group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 p-5 cursor-default"
        >
          {/* Sheen on hover */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <div className="absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-white/10 blur-xl" />
          </div>

          {/* Project image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl ring-1 ring-black/10 dark:ring-white/10 mb-4">
            <Image
              src={project.imageUrl}
              alt={project.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
              {project.name}
            </h3>
            <p className="text-xs text-zinc-500 dark:text-white/50">{project.tech}</p>
          </div>

          {/* Action buttons */}
          <div className="mt-5 flex gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={secondaryChip('cursor-pointer hover:ring-black/20 dark:hover:ring-white/20')}
            >
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={secondaryChip('cursor-pointer hover:ring-black/20 dark:hover:ring-white/20')}
            >
              GitHub
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
