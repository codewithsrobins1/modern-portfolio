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
import { BiLogoGmail } from 'react-icons/bi';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import projectImg1 from '@/public/images/1.png';
import projectImg2 from '@/public/images/2.jpg';
import projectImg3 from '@/public/images/3.png';

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
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Work Experience
            </h2>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    March, 2021 - Present
                  </p>
                  <p className="font-medium">
                    Software Engineer II
                  </p>
                  <p className="text-blue-600 dark:text-blue-400">
                    Mint Mobile | Ultra Mobile
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                As a Software Engineer II on the
                eCommerce platform team, I built
                and optimized customer-facing
                features like product browsing,
                checkout, and order tracking using
                modern web technologies. I also
                collaborated with cross-functional
                teams to integrate APIs, improve
                site performance, and ensure a
                seamless and responsive user
                experience.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    March, 2021 - Present
                  </p>
                  <p className="font-medium">
                    Software Engineer II
                  </p>
                  <p className="text-blue-600 dark:text-blue-400">
                    Mint Mobile | Ultra Mobile
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                As a Software Engineer II on the
                eCommerce platform team, I built
                and optimized customer-facing
                features like product browsing,
                checkout, and order tracking using
                modern web technologies. I also
                collaborated with cross-functional
                teams to integrate APIs, improve
                site performance, and ensure a
                seamless and responsive user
                experience.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    March, 2021 - Present
                  </p>
                  <p className="font-medium">
                    Software Engineer II
                  </p>
                  <p className="text-blue-600 dark:text-blue-400">
                    Mint Mobile | Ultra Mobile
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                As a Software Engineer II on the
                eCommerce platform team, I built
                and optimized customer-facing
                features like product browsing,
                checkout, and order tracking using
                modern web technologies. I also
                collaborated with cross-functional
                teams to integrate APIs, improve
                site performance, and ensure a
                seamless and responsive user
                experience.
              </p>
            </div>
          </motion.section>

          {/* Projects */}
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Personal Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-default">
                <CardContent className="p-4">
                  <Image
                    src={projectImg1}
                    alt="Project 1"
                    className="rounded-lg mb-4"
                  />

                  <div>
                    <h3 className="font-medium text-lg">
                      Project Name
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Next.js, Tailwind
                    </p>

                    <div className="flex gap-3 mt-2">
                      {/* Live Demo CTA */}
                      <a
                        href="https://your-live-link.com"
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

                      {/* GitHub CTA */}
                      <a
                        href="https://github.com/your-repo"
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

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-default">
                <CardContent className="p-4">
                  <Image
                    src={projectImg2}
                    alt="Project 2"
                    className="rounded-lg mb-4"
                  />

                  <div>
                    <h3 className="font-medium text-lg">
                      Project Name
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Next.js, Tailwind
                    </p>

                    <div className="flex gap-3 mt-2">
                      {/* Live Demo CTA */}
                      <a
                        href="https://your-live-link.com"
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

                      {/* GitHub CTA */}
                      <a
                        href="https://github.com/your-repo"
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

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-default">
                <CardContent className="p-4">
                  <Image
                    src={projectImg3}
                    alt="Project 3"
                    className="rounded-lg mb-4"
                  />

                  <div>
                    <h3 className="font-medium text-lg">
                      Project Name
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Next.js, Tailwind
                    </p>

                    <div className="flex gap-3 mt-2">
                      {/* Live Demo CTA */}
                      <a
                        href="https://your-live-link.com"
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

                      {/* GitHub CTA */}
                      <a
                        href="https://github.com/your-repo"
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
            </div>
          </motion.section>

          <p className="text-gray-500 text-center pt-8">
            © {new Date().getFullYear()} Sean
            Robinson
          </p>
        </main>
      </div>
    </div>
  );
}
