'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { profile, socials } from '@/data';
import { socialIconsMap } from '../Icons';
import Link from 'next/link';
import { Link2, Handshake } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const ICON_SIZE = '28';

const ROTATING_PHRASES = [
  'I design systems that scale.',
  'From concept to production.',
  'Backend logic. Frontend precision.',
  'Engineering ideas into impact.',
  'Performance is a feature.',
];

const ROTATE_INTERVAL_MS = 3500;

const phraseVariants = {
  initial: {
    opacity: 0,
    y: 12,
    filter: 'blur(4px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    y: -8,
    filter: 'blur(4px)',
    transition: { duration: 0.4 },
  },
};

export default function Header() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % ROTATING_PHRASES.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className={cn(
        'relative min-h-[85vh] w-full overflow-hidden',
        'bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center'
      )}
      style={{ backgroundImage: `url(${profile.cover_picture})` }}
    >
      {/* Backdrop blur overlay — light in light mode, dark in dark mode */}
      <div
        className={cn(
          'absolute inset-0 z-0',
          'bg-background/80 backdrop-blur-sm',
          'dark:bg-black/70'
        )}
        aria-hidden
      />

      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center px-6 py-16 md:px-8 md:py-24">
        {/* Centered hero block */}
        <div className="flex w-full max-w-4xl flex-col items-center text-center">
          {/* Main heading: Hi, I'm ilorez — Full Stack Developer. */}
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Hi, I&apos;m{' '}
            <span className="text-primary">{profile.username}</span>
            {' — '}
            <span className="relative inline-block">
              Full Stack Developer
              {/* Animated underline */}
              <motion.span
                className="absolute -bottom-1 left-0 h-[2px] w-full origin-left rounded-full bg-primary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ boxShadow: '0 0 12px hsl(var(--primary))' }}
                aria-hidden
              />
            </span>
            .
          </h1>

          {/* Rotating philosophy line with glow */}
          <div
            className="mt-6 min-h-[3rem] w-full max-w-2xl md:mt-8 md:min-h-[3.5rem]"
            aria-live="polite"
            aria-atomic="true"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={phraseIndex}
                variants={phraseVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className={cn(
                  'text-lg font-medium md:text-xl lg:text-2xl',
                  'bg-gradient-to-r from-foreground/90 via-foreground/80 to-primary bg-clip-text text-transparent',
                  'drop-shadow-[0_0_20px_hsl(var(--primary)/0.25)]'
                )}
              >
                {ROTATING_PHRASES[phraseIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="#contact" className="inline-flex">
              <Button size="lg" className="gap-2 shadow-lg">
                <Handshake className="h-5 w-5" />
                Work with me
              </Button>
            </Link>
          </div>
        </div>

        {/* Avatar + socials — below hero for clean hierarchy */}
        <div className="mt-16 flex flex-col items-center gap-6 md:mt-20">
          <Avatar className="h-32 w-32 border-4 border-border shadow-xl md:h-36 md:w-36">
            <AvatarImage
              src={profile.profile_picture}
              alt={`${profile.first_name} ${profile.last_name}`}
              className="object-cover"
            />
            <AvatarFallback className="bg-muted text-lg text-foreground">
              {profile.first_name[0]}
              {profile.last_name[0]}
            </AvatarFallback>
          </Avatar>
          <ul className="flex flex-wrap justify-center gap-3" aria-label="Social links">
            {socials.map((social) => {
              const IconComponent = socialIconsMap[social.id];
              const Icon = IconComponent ?? Link2;
              return (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={cn(
                      'flex items-center justify-center rounded-lg p-2.5',
                      'text-muted-foreground hover:text-foreground hover:bg-accent/50',
                      'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background'
                    )}
                    aria-label={social.name}
                  >
                    <Icon color="currentColor" size={ICON_SIZE} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-muted-foreground"
        aria-hidden
      >
        <video
          className="h-12 w-12 object-contain motion-reduce:hidden"
          width={48}
          height={48}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        >
          <source src="/scroll_down_animation.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
}
