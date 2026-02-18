'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Cat_Sad, Cat_Very_Happy } from './Icons';
import { AtSign, Briefcase, FerrisWheel, Lightbulb, TextSelect, User } from 'lucide-react';
import { ModeToggle } from '../mode-toggle';
import { useTheme } from 'next-themes';
import { profile } from '@/data';

const NAV_LINKS = [
  { href: '#about', label: 'About', icon: User },
  { href: '/', label: 'Resume', icon: TextSelect },
  { href: '#projects', label: 'Projects', icon: Lightbulb },
  { href: '/', label: 'Blogs', icon: FerrisWheel },
  { href: '#experience', label: 'Experience', icon: Briefcase },
  { href: '#contact', label: 'Contact', icon: AtSign },
] as const;

export default function Navbar() {
  const { resolvedTheme } = useTheme();
  const [open, setOpen] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const iconColor = resolvedTheme === 'dark' ? 'white' : 'black';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollingDown = prevScrollPos < currentScrollPos;
      setPrevScrollPos(currentScrollPos);
      if (currentScrollPos > 10 && scrollingDown) {
        setOpen(false);
      } else if (currentScrollPos <= 10) {
        setOpen(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={cn(
        'flex flex-col gap-4 w-fit px-3 py-3 rounded-2xl',
        'bg-card/95 backdrop-blur-md border border-border/50',
        'shadow-lg shadow-black/5 dark:shadow-black/20'
      )}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex flex-col items-center gap-0.5 outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-xl"
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        {open ? (
          <>
            <Cat_Very_Happy color={iconColor} size="52" />
            <span className="text-sm font-medium text-foreground">{profile.username}</span>
          </>
        ) : (
          <Cat_Sad color={iconColor} size="52" />
        )}
      </button>

      {open && (
        <nav className="w-full" aria-label="Main">
          <ul className="flex flex-col gap-2 w-full items-center">
            {NAV_LINKS.map(({ href, label, icon: Icon }) => (
              <li key={label} className="w-full">
                <Link
                  href={href}
                  className={cn(
                    'flex flex-col items-center gap-1 py-2 px-2 rounded-lg w-full',
                    'text-muted-foreground hover:text-foreground hover:bg-accent/50',
                    'transition-colors'
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-xs font-medium">{label}</span>
                </Link>
              </li>
            ))}
            <li className="w-full flex justify-center pt-1">
              <ModeToggle />
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
