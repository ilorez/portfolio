'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import type { Certification } from '@/data/types';

const CertificationCard = ({
  title,
  issuer,
  date,
  description,
  link,
  certificate_link,
  credential_id,
  skills,
}: Certification) => {
  const certificateUrl = certificate_link ?? link;
  return (
    <Card
      className={[
        'w-full max-w-[450px] transition-all duration-200',
        'bg-card border border-border/50 shadow-sm',
        'hover:shadow-md hover:border-primary/20 dark:hover:border-primary/30',
      ].join(' ')}
    >
      <CardHeader className="flex flex-col gap-2">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <CardTitle className="text-lg">{title}</CardTitle>
          {certificateUrl && (
            <a
              href={certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors shrink-0"
              aria-label={`View ${title}`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <CardDescription>{issuer}</CardDescription>
          <Badge variant="outline" className="text-xs font-normal rounded-sm">
            {date}
          </Badge>
          {credential_id && (
            <span className="text-xs text-muted-foreground">ID: {credential_id}</span>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-0 space-y-2">
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {skills.map((s) => (
              <Badge key={s} variant="secondary" className="text-xs font-normal">
                {s}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CertificationCard;
