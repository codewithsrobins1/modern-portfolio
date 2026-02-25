'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from './theme-toggle';

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
];

export function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [active, setActive] = useState('About');

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY && current > 80) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(current);

      // Update active section based on scroll position
      const sections = ['about', 'work', 'projects'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(id.charAt(0).toUpperCase() + id.slice(1));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center pointer-events-none">
      <motion.nav
        animate={{ opacity: show ? 1 : 0, y: show ? 0 : -16 }}
        transition={{ duration: 0.3, ease: easeOut }}
        className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/10 bg-white/10 dark:bg-zinc-900/60 px-3 py-2 text-sm shadow-lg backdrop-blur-lg"
      >
        <div className="flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.label)}
              className="relative rounded-full px-4 py-2 text-sm text-gray-600 dark:text-white/80 hover:opacity-100 transition"
            >
              {active === link.label && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-black/5 dark:bg-white/10"
                  transition={{ duration: 0.35, ease: easeOut }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </div>
        <ThemeToggle />
      </motion.nav>
    </div>
  );
}
