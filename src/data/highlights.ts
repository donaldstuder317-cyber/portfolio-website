import type { ComponentType } from 'react';

import {
  CheckmarkCircle,
  RocketIcon,
  ThumbsUpIcon,
  type CardIconProps,
} from '@/components/icons/card';

export type Highlight = {
  Icon: ComponentType<CardIconProps>;
  /** Large figure shown above the title. */
  stat: string;
  title: string;
  description: string;
};

export const highlights: Highlight[] = [
  {
    Icon: CheckmarkCircle,
    stat: '100%',
    title: 'Clean Code Guarantee',
    description: 'Every function commented, all dependencies documented.',
  },
  {
    Icon: RocketIcon,
    stat: '30',
    title: 'Days to Deploy',
    description:
      'Guaranteed delivery of a working, defined prototype within one month.',
  },
  {
    Icon: ThumbsUpIcon,
    stat: '10x',
    title: 'SEO Best Practice',
    description:
      'Implementation of 10-core SEO principles right from the first commit.',
  },
];
