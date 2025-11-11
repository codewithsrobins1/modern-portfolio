'use client';
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

export default function Home() {
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
          <section className="space-y-10">
            {/* Name, Job Title, Location */}
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
            </motion.div>

            {/* About Me */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-3"
            >
              <h2 className="text-lg font-semibold">
                Building Solutions
              </h2>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                As a Software Engineer in the
                Telecommunications industry
                working mainly on the Ecommerce
                platform. I focus on building
                high-performance, user-centric web
                interfaces using Next.js and
                modern frontend technologies.
              </p>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                My work revolves around combining
                backend systems with intuitive,
                responsive designs that streamline
                the customer purchase experience
                on our Ecommerce platform.
              </p>
            </motion.div>

            {/* Resume CTA + Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <Button className="rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 text-white transition-transform hover:scale-105 cursor-pointer">
                Resume
              </Button>

              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </Link>

              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
            </motion.div>
          </section>

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
              Experience
            </h2>

            <div className="space-y-8">
              <div className="flex items-center justify-between"></div>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
