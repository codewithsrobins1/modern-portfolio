import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),
    defineField({
      name: 'isCurrent',
      title: 'Current Role',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      validation: (Rule) => Rule.required(),
      description: 'Lower numbers appear first',
    }),
    // ✅ NEW: Bullet point list — use this instead of "description" for the new design
    defineField({
      name: 'points',
      title: 'Bullet Points',
      type: 'array',
      of: [{ type: 'string' }],
      description:
        'Each item becomes one bullet point under this role. This replaces the old "description" field.',
    }),
    // ⚠️ Legacy field — kept for backwards compatibility, can be removed once you've migrated data
    defineField({
      name: 'description',
      title: 'Description (Legacy)',
      type: 'text',
      description:
        'Old single-text description. Kept for fallback — prefer using "Bullet Points" above.',
    }),
  ],
});
