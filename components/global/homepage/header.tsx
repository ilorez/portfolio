'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { profile, socials } from '@/data';
import { socialIconsMap } from '../Icons';
import { Link2, Mouse } from 'lucide-react';
import { cn } from '@/lib/utils';

const ICON_SIZE = '28';

export default function Header() {
  return (
    <section
      className={cn(
        'relative min-h-[75vh] w-full overflow-hidden',
        'bg-cover bg-center bg-no-repeat',
        'text-white'
      )}
      style={{ backgroundImage: `url(${profile.cover_picture})` }}
    >
      {/* Backdrop blur overlay for readability and dark/light balance */}
      <div
        className={cn(
          'absolute inset-0 z-0',
          'bg-background/80 backdrop-blur-sm',
          'dark:bg-black/70'
        )}
      />
      <div className="relative z-10 flex min-h-[75vh] w-full flex-col items-center justify-center gap-8 p-8 pb-16 md:p-12 md:pb-20">
        <div className="flex w-full max-w-4xl flex-col items-center gap-10 md:flex-row md:justify-around md:gap-12">
          {/* Name + title */}
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {profile.first_name} {profile.last_name}
            </h1>
            <p className="text-xl text-primary md:text-2xl">
              {profile.Jobs[0] ?? 'Developer'}
            </p>
          </div>

          {/* Avatar + socials */}
          <div className="flex flex-col items-center gap-6">
            <Avatar className="h-40 w-40 border-4 border-border shadow-xl md:h-48 md:w-48">
              <AvatarImage
                src={profile.profile_picture}
                alt={`${profile.first_name} ${profile.last_name}`}
                className="object-cover scale-150"
              />
              <AvatarFallback className="text-lg text-foreground">
                {profile.first_name[0]}
                {profile.last_name[0]}
              </AvatarFallback>
            </Avatar>
            <ul className="flex flex-wrap justify-center gap-4" aria-label="Social links">
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
                        'flex items-center justify-center rounded-lg p-2',
                        'text-muted-foreground hover:text-foreground hover:bg-accent/50',
                        'transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background'
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
      </div>

      {/* Scroll indicator: bottom-center, subtle bounce */}
      <div
        className={cn(
          'absolute bottom-6 left-1/2 z-10 -translate-x-1/2 md:bottom-8',
          'text-muted-foreground'
        )}
        aria-hidden
      >
        <Mouse className="h-8 w-8 shrink-0 animate-scroll-indicator" />
      </div>
    </section>
  );
}
