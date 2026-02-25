'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { WorkExperience } from '@/lib/types/sanityTypes';

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface WorkExperienceProps {
  experiences: WorkExperience[];
}

function WorkItem({ exp }: { exp: WorkExperience }) {
  const [open, setOpen] = useState(true);

  const start = new Date(exp.startDate).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
  const end =
    exp.isCurrent || !exp.endDate
      ? 'Present'
      : new Date(exp.endDate).toLocaleDateString('en-US', {
          month: 'short',
          year: 'numeric',
        });

  // Support both bullet points array and legacy description string
  const bulletPoints: string[] =
    exp.points && exp.points.length > 0
      ? exp.points
      : exp.description
        ? exp.description.split('\n').filter((s) => s.trim().length > 0)
        : [];

  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 p-5 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-0.5">
          <p className="text-xs text-zinc-500 dark:text-white/50">
            {start} – {end}
          </p>
          <p className="mt-1 text-lg font-semibold text-zinc-900 dark:text-white">
            {exp.title}
          </p>
          <p className="text-sm text-blue-600 dark:text-white/70">{exp.company}</p>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 rounded-full px-3 py-1 text-xs ring-1 ring-black/10 dark:ring-white/10 bg-black/5 dark:bg-white/5 text-zinc-700 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/10 transition"
        >
          {open ? 'Hide' : 'Details'}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && bulletPoints.length > 0 && (
          <motion.div
            key="details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="overflow-hidden"
          >
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-white/70">
              {bulletPoints.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export const WorkExperienceSection = ({ experiences }: WorkExperienceProps) => {
  return (
    <div className="space-y-4">
      {experiences.map((exp) => (
        <WorkItem key={exp._id} exp={exp} />
      ))}
    </div>
  );
};
