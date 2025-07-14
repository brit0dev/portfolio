import type {ReactNode, SVGProps} from 'react';

export type SectionProps = {
  isScrolled: boolean;
};

export type SectionHeaderProps = {
  children: ReactNode;
  isSticky?: boolean;
  isOnPage?: boolean;
  isShadow?: boolean;
  icon?: {
    SVGComp: React.FC<SVGProps<SVGSVGElement>>;
    offSet?: {
      top?: string;
      left?: string;
      bottom?: string;
      right?: string;
    };
  };
  dashed?: boolean;
};
