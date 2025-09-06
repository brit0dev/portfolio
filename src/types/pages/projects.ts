import type {FC, SVGProps} from 'react';
import type {Tags} from '../common';
import {TECHNOLOGIES, VIEW_ICONS} from '@/components/common/icons/icons-maps';

export type ViewType = keyof typeof VIEW_ICONS;

export type ViewIcons = {
  [key in ViewType]: FC<SVGProps<SVGSVGElement>>;
};

export type ProjectArea = 'FrontEnd' | 'BackEnd' | 'Design' | 'FullStack';

type TechnologyName = keyof typeof TECHNOLOGIES;

export type Project = {
  title: string;
  description: string[];
  images: string[];
  tags: Tags;
  area: ProjectArea[];
  technologies: TechnologyName[];
  view: {
    type: ViewType;
    link: string;
  }[];
};
