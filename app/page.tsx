'use client';

import { client } from '@/sanity/lib/client';
import {
  ABOUT_QUERY,
  WORK_EXPERIENCE_QUERY,
  PROJECTS_QUERY,
} from '@/sanity/lib/queries';
import type {
  About,
  WorkExperience,
  Project,
} from '@/lib/types/sanityTypes';
import Image from 'next/image';
import profilePic from '@/public/images/pp.jpg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { WorkExperienceSection } from '@/components/WorkExperience';
import { Projects } from '@/components/Projects';

const easeOut: [number, number, number, number] =
  [0.16, 1, 0.3, 1];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 12,
    filter: 'blur(8px)',
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: easeOut },
  },
};

const sectionReveal = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

function Section({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id: string;
}) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        margin: '-10% 0px -10% 0px',
      }}
      variants={sectionReveal}
      className="space-y-6"
    >
      <h2 className="text-3xl font-semibold tracking-tight bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

export default function Home() {
  const [about, setAbout] =
    useState<About | null>(null);
  const [experiences, setExperiences] = useState<
    WorkExperience[]
  >([]);
  const [projects, setProjects] = useState<
    Project[]
  >([]);

  useEffect(() => {
    async function fetchData() {
      const [aboutRes, expRes, projRes] =
        await Promise.all([
          client.fetch<About>(ABOUT_QUERY),
          client.fetch<WorkExperience[]>(
            WORK_EXPERIENCE_QUERY
          ),
          client.fetch<Project[]>(PROJECTS_QUERY),
        ]);
      setAbout(aboutRes);
      setExperiences(expRes);
      setProjects(projRes);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f8fc] dark:bg-neutral-900 text-zinc-900 dark:text-white transition-colors duration-300">
      {/* Cursor spotlight */}
      <Spotlight />

      <div className="mx-auto max-w-5xl px-6 pb-20 pt-10">
        {/* HERO */}
        <motion.div
          className="mt-16 grid gap-10 md:grid-cols-[200px_1fr]"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Profile Picture */}
          <motion.div
            variants={item}
            className="flex items-center justify-center md:justify-start"
          >
            <div className="h-40 w-40 overflow-hidden rounded-full ring-1 ring-black/10 dark:ring-white/15 shadow-lg">
              <Image
                src={profilePic}
                alt="Sean Robinson"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Hero Text */}
          <div className="space-y-6" id="about">
            <div className="space-y-2">
              <motion.h1
                variants={item}
                className="text-4xl font-semibold tracking-tight bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent"
              >
                Sean Robinson
              </motion.h1>
              <motion.p
                variants={item}
                className="text-base font-semibold leading-relaxed text-zinc-600 dark:text-white/70 pb-3"
              >
                Software Engineer II @ T-Mobile
                (Mint Mobile & Ultra Mobile) •
                Orange County, CA • UCI 2017
              </motion.p>
              <motion.div
                variants={item}
                className="space-y-2"
              >
                <p className="text-m leading-6 text-zinc-600 dark:text-white/70">
                  {about?.paragraphOne}
                </p>
                {about?.paragraphTwo && (
                  <p className="text-m leading-6 text-zinc-600 dark:text-white/70">
                    {about.paragraphTwo}
                  </p>
                )}
              </motion.div>
            </div>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex items-center gap-3"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-5 py-2 text-sm font-medium bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 text-white hover:opacity-90 active:scale-[0.99] transition cursor-pointer"
              >
                Resume
              </a>
              <Link
                href="https://github.com/codewithsrobins1"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-zinc-700 dark:text-white/80 hover:bg-black/10 dark:hover:bg-white/10 transition"
              >
                <FaGithub className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/srobins1/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-zinc-700 dark:text-white/80 hover:bg-black/10 dark:hover:bg-white/10 transition"
              >
                <FaLinkedin className="h-4 w-4" />
              </Link>
              <a
                href="mailto:srobinsons1995@gmail.com"
                className="grid h-10 w-10 place-items-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-zinc-700 dark:text-white/80 hover:bg-black/10 dark:hover:bg-white/10 transition"
              >
                <BiLogoGmail className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* SECTIONS */}
        <div className="mt-16 space-y-16">
          <Section
            title="Work Experience"
            id="work"
          >
            <WorkExperienceSection
              experiences={experiences}
            />
          </Section>

          <Section
            title="Personal Projects"
            id="projects"
          >
            <Projects projects={projects} />
          </Section>
        </div>

        {/* Footer */}
        <p className="mt-16 text-center text-sm text-zinc-400 dark:text-white/30">
          © {new Date().getFullYear()} Sean
          Robinson
        </p>
      </div>
    </div>
  );
}

function Spotlight() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) =>
      setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () =>
      window.removeEventListener(
        'mousemove',
        onMove
      );
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 hidden dark:block"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.04), transparent 60%)`,
      }}
    />
  );
}
