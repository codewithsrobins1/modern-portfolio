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
import { ThemeToggle } from '@/components/theme-toggle';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { WorkExperienceSection } from '@/components/WorkExperience';
import { Projects } from '@/components/Projects';

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
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        {/* Profile Picture and Theme Toggle */}
        <motion.header
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-12"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image
              src={profilePic}
              alt="profile picture"
              className="cursor-pointer transition-all duration-300 hover:scale-110"
            ></Image>
          </div>

          <ThemeToggle />
        </motion.header>

        <main className="space-y-10">
          {/* Name, Job Title, Location */}
          <section className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-1"
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via--indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
                Sean Robinson
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Current Role: Software Engineer II
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Orange County, CA
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                University of Irvine, Class of
                2017
              </p>
            </motion.div>

            {/* About Me */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-3"
              id="about"
            >
              <h2 className="text-lg font-semibold">
                {about?.title ??
                  'Building Solutions'}
              </h2>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                {about?.paragraphOne}
              </p>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                {about?.paragraphTwo}
              </p>
            </motion.div>

            {/* Resume CTA + Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <a
                href="https://drive.google.com/file/d/1MnEE_EaGsSjylbFXGfnb7r41Os_uxe8V/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 text-white transition-transform hover:scale-105 cursor-pointer">
                  Resume
                </Button>
              </a>

              <Link
                href="https://github.com/codewithsrobins1"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/srobins1/"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>

              <a
                href="mailto:srobinsons1995@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <BiLogoGmail className="w-6 h-6" />
              </a>
            </motion.div>
          </section>

          {/* Work Experience */}
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
            id="work"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Work Experience
            </h2>

            <WorkExperienceSection
              experiences={experiences}
            />
          </motion.section>

          {/* Projects */}
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
            id="projects"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Personal Projects
            </h2>

            {/* Project Cards */}
            <Projects projects={projects} />
          </motion.section>

          {/* Copyright */}
          <p className="text-gray-500 text-center pt-8">
            © {new Date().getFullYear()} Sean
            Robinson
          </p>
        </main>
      </div>
    </div>
  );
}
