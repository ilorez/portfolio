'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Cat_Sad, Cat_Very_Happy } from './Icons';
import { AtSign, Briefcase, FerrisWheel, Lightbulb, Menu, User, X } from 'lucide-react';
import { ModeToggle } from '../mode-toggle';
import { profile } from '@/data';

const NAV_LINKS = [
  { href: '#projects', label: 'Work', icon: Lightbulb },
  { href: '/', label: 'Blog', icon: FerrisWheel },
  { href: '#about', label: 'About', icon: User },
  { href: '#resume', label: 'Resume', icon: Briefcase },
  { href: '#contact', label: 'Contact', icon: AtSign },
] as const;

const NAVBAR_HEIGHT = 'h-14';

/** Scroll delta (px) before we collapse/expand — avoids jitter */
const SCROLL_THRESHOLD = 12;

export default function Navbar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const collapsedRef = useRef(false);

  collapsedRef.current = collapsed;

  // Scroll: down → collapse (only cat), up → expand (full navbar)
  useEffect(() => {
    const handleScroll = () => {
      const current =
        typeof window.scrollY !== 'undefined'
          ? window.scrollY
          : document.documentElement?.scrollTop ?? 0;
      const prev = lastScrollY.current;
      const delta = current - prev;
      lastScrollY.current = current;

      if (Math.abs(delta) < SCROLL_THRESHOLD) return;

      if (delta > 0) {
        if (!collapsedRef.current) setCollapsed(true);
      } else {
        if (collapsedRef.current) setCollapsed(false);
      }
    };
    lastScrollY.current =
      typeof window.scrollY !== 'undefined'
        ? window.scrollY
        : document.documentElement?.scrollTop ?? 0;
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile dropdown when collapsing; close on resize to desktop
  useEffect(() => {
    if (collapsed) setMobileMenuOpen(false);
  }, [collapsed]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isExpanded = !collapsed;
  const isMenuOpen = mobileMenuOpen;

  const handleCatClick = () => {
    //document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
    setCollapsed((c) => !c);
    if (!collapsed) setMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        'relative min-w-0 overflow-visible',
        'bg-white/85 dark:bg-zinc-900/85',
        'backdrop-blur-xl border border-border/40',
        'shadow-xl shadow-black/5 dark:shadow-zinc-950/40',
        'transition-colors duration-300',
        'rounded-2xl transition-[width] duration-300 ease-out',
        collapsed ? 'w-14 mx-auto' : 'w-full',
        isMenuOpen && 'max-md:rounded-b-none max-md:border-b-0'
      )}
      aria-label="Main"
    >
      <div
        className={cn(
          'flex items-center min-w-0 overflow-hidden',
          NAVBAR_HEIGHT,
          collapsed ? 'justify-center items-center gap-0 px-0' : 'gap-4 px-4 md:px-6'
        )}
      >
        {/* Cat — toggles collapse; happy = collapsed, sad = expanded; centered when collapsed. Uses currentColor for theme. */}
        <button
          type="button"
          onClick={handleCatClick}
          className={cn(
            'flex items-center shrink-0 rounded-lg outline-none text-foreground',
            'focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
            'transition-transform duration-200 hover:scale-105 active:scale-95',
            collapsed ? 'p-2 justify-center w-full min-w-0' : 'gap-2 py-1'
          )}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Collapse menu' : 'Expand menu'}
        >
          {isExpanded ? (
            <Cat_Sad size="36" />
          ) : (
            <Cat_Very_Happy size="36" />
          )}
          <span
            className={cn(
              'hidden text-sm font-medium text-foreground truncate sm:block',
              'transition-opacity duration-200',
              collapsed ? 'w-0 overflow-hidden opacity-0' : 'opacity-100'
            )}
          >
            {profile.username}
          </span>
        </button>

        {/* Center: Nav links — hidden when collapsed */}
        <ul
          className={cn(
            'hidden md:flex items-center gap-1 lg:gap-2 flex-1 justify-center min-w-0',
            'transition-opacity duration-200',
            collapsed ? 'opacity-0 w-0 min-w-0 overflow-hidden pointer-events-none' : 'opacity-100'
          )}
        >
          {NAV_LINKS.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <Link
                href={href}
                className={cn(
                  'group flex items-center gap-1.5 py-2 px-3 rounded-lg whitespace-nowrap',
                  'text-muted-foreground hover:text-foreground hover:bg-accent/30',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                  'transition-colors duration-200'
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="text-sm font-medium">{label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Theme toggle + hamburger — hidden when collapsed */}
        <div
          className={cn(
            'flex items-center gap-2 shrink-0 min-w-0',
            'transition-opacity duration-200',
            collapsed ? 'opacity-0 w-0 min-w-0 overflow-hidden pointer-events-none' : 'opacity-100'
          )}
        >
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className={cn(
              'flex md:hidden items-center justify-center w-10 h-10 rounded-lg',
              'text-muted-foreground hover:text-foreground hover:bg-accent/30',
              'outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
              'transition-colors duration-200'
            )}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <ModeToggle />
        </div>
      </div>

      {/* Mobile dropdown: only when expanded */}
      <div
        className={cn(
          'absolute top-full left-0 right-0 z-10 md:hidden',
          'overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out',
          'rounded-b-2xl border-x border-b border-border/40',
          'bg-white/85 dark:bg-zinc-900/85 backdrop-blur-xl',
          'shadow-lg shadow-black/5 dark:shadow-zinc-950/40',
          mobileMenuOpen ? 'max-h-[min(70vh,28rem)] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <ul className="flex flex-col gap-0.5 px-2 py-3">
          {NAV_LINKS.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'group flex items-center gap-2 py-2.5 px-3 rounded-lg',
                  'text-muted-foreground hover:text-foreground hover:bg-accent/30',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                  'transition-colors duration-200'
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="text-sm font-medium">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
