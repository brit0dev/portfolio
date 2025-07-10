import type {ReactNode} from 'react';

export type SectionProps = {
  isScrolled: boolean;
};

export type SectionHeaderProps = {
  children: ReactNode;
  isSticky?: boolean;
  isOnPage?: boolean;
  isShadow?: boolean;
  dashed?: boolean;
};
