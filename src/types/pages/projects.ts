import type {FC, SVGProps} from 'react';

export type Project = {
  title: string;
  description: string;
  images: string[];
  tags: string[];
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
