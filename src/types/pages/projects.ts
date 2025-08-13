import type {FC, SVGProps} from 'react';
import type {Tags} from '../common';

export type Project = {
  title: string;
  description: string[];
  images: string[];
  tags: Tags;
  area: string[];
  technologies: {
    name: string;
    icon: FC<SVGProps<SVGSVGElement>>;
  }[];
  view: {
    type: 'demo' | 'github' | 'figma';
    link: string;
    icon: FC<SVGProps<SVGSVGElement>>;
  }[];
};
