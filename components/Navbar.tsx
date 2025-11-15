'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
];

export function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] =
    useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // hide when scrolling down, show when scrolling up
      if (current > lastScrollY && current > 80) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(current);
    };

    window.addEventListener(
      'scroll',
      handleScroll
    );
    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      );
  }, [lastScrollY]);

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center pointer-events-none">
      <nav
        className={`w-full max-w-[300px] md:max-w-xl pointer-events-auto flex items-center justify-center gap-6 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm shadow-lg backdrop-blur-lg transition-all duration-300
        dark:border-white/10 dark:bg-zinc-900/40
        ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
      `}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-gray-600 dark:text-gray-400"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
