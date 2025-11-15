import type { WorkExperience } from '@/lib/types/sanityTypes';

interface WorkExperienceProps {
  experiences: WorkExperience[];
}

export const WorkExperienceSection = ({
  experiences,
}: WorkExperienceProps) => {
  return (
    <div className="space-y-8">
      {experiences.map((exp) => {
        const start = new Date(
          exp.startDate
        ).toLocaleDateString('en-US', {
          month: 'short',
          year: 'numeric',
        });

        const end =
          exp.isCurrent || !exp.endDate
            ? 'Present'
            : new Date(
                exp.endDate
              ).toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric',
              });

        return (
          <div
            key={exp._id}
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {start} - {end}
                </p>
                <p className="font-medium">
                  {exp.title}
                </p>
                <p className="text-blue-600 dark:text-blue-400">
                  {exp.company}
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {exp.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};
