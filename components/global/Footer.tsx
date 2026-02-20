'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowUp, Github, Linkedin, Instagram, MessageCircle, Keyboard, Heart } from 'lucide-react';
import { profile, socials } from '@/data';
import { thirdFont } from '@/app/fonts';

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  discord: MessageCircle,
  monkeytype: Keyboard,
};

const QUICK_LINKS = [
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={cn(
        'relative w-full mt-12 md:mt-16',
        'bg-zinc-50/80 dark:bg-zinc-900/60',
        'border-t border-border/30'
      )}
    >
      {/* Back to Top */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={scrollToTop}
          className={cn(
            'flex items-center justify-center w-10 h-10 rounded-full',
            'bg-primary text-primary-foreground',
            'shadow-md hover:shadow-lg hover:-translate-y-0.5',
            'active:scale-95 transition-all duration-200',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
          )}
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 pt-12 pb-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Branding */}
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <Link
              href="#hero"
              className={cn(
                'text-lg font-semibold text-foreground hover:text-primary transition-colors',
                thirdFont.className
              )}
            >
              {profile.first_name} {profile.last_name}
            </Link>
            <p className="text-sm text-muted-foreground">
              Full-stack developer crafting impactful web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <span className="text-sm font-medium text-foreground">Quick Links</span>
            <ul className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3 items-center sm:items-start lg:items-end">
            <span className="text-sm font-medium text-foreground">Connect</span>
            <div className="flex items-center gap-1">
              {socials.map((social) => {
                const Icon = SOCIAL_ICONS[social.id] || MessageCircle;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'flex items-center justify-center w-9 h-9 rounded-lg',
                      'text-muted-foreground hover:text-foreground hover:bg-accent/40',
                      'transition-colors duration-150',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
                    )}
                    aria-label={social.name}
                    title={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {currentYear} {profile.first_name} {profile.last_name}. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" />
          </span>
        </div>
      </div>
    </footer>
  );
}
