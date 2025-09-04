import {useIsMobile} from '@/hooks/useIsMobile';
import type {SectionHeaderProps} from '@/types/common';

const SectionHeader = ({
  children,
  isSticky = false,
  isOnPage = false,
  isShadow = false,
  dashed = false,
  icon,
}: SectionHeaderProps) => {
  const stickyClasses = isSticky ? 'sticky top-0 z-10' : '';
  const onPageClasses = isOnPage ? 'bg-background-light' : 'bg-secondary-light';
  const shadow = isShadow ? 'shadow-[1px_1px_2px_rgb(20,20,20,0.1)]' : '';
  const borderType = dashed
    ? 'dashed-border-b'
    : 'border-b border-primary-dark';
  const Icon = icon?.SVGComp;
  const offSet = `-top-[${icon?.offSet?.top}] -left-[${icon?.offSet?.left}]`;

  const isMobile = useIsMobile();

  return (
    <div
      className={` relative ${!isMobile && 'snap-end'} text-3xl font-instrument h-16 xs:h-18 flex items-center gap-1 ${onPageClasses} ${stickyClasses} ${shadow} ${isOnPage && borderType} select-none transition duration-200`}
    >
      <div className=" flex py-1 h-10 xs:h-12 w-14 xs:w-14.5 bg-primary rounded-r-[0.625rem]">
        <div className="w-1.25 xs:w-1.5 bg-secondary-dark rounded-r-[0.625rem]"></div>
        <div className="flex flex-1 items-center relative justify-center">
          {Icon && <Icon className={`absolute z-10 ${offSet}`} />}

          <div className="flex items-center justify-center w-10 h-7.25 xs:w-11 xs:h-8 border-1 border-accent-dark relative z-0 transform-[rotateZ(-10deg)]">
            <div className="w-1.5 h-1.5 xs:w-1.75 xs:h-1.75 absolute bg-background border-1 border-primary-dark -top-0.75 -left-0.75 rounded-xs shadow-xs"></div>
            <div className="w-1.5 h-1.5 xs:w-1.75 xs:h-1.75 absolute bg-background border-1 border-primary-dark -top-0.75 -right-0.75 rounded-xs shadow-xs"></div>
            <div className="w-1.5 h-1.5 xs:w-1.75 xs:h-1.75 absolute bg-background border-1 border-primary-dark -bottom-0.75 -left-0.75 rounded-xs shadow-xs"></div>
            <div className="w-1.5 h-1.5 xs:w-1.75 xs:h-1.75 absolute bg-background border-1 border-primary-dark -bottom-0.75 -right-0.75 rounded-xs shadow-xs"></div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-background h-10 xs:h-12 relative dashed-border-l dashed-border-r section-border-y rounded-[0.625rem]">
        <div className="relative px-3.75 z-0">
          <h2
            className={`font-semibold text-text-primary text-2xl xs:text-3xl leading-7.5 dashed-border-b dashed-border-t section-border-x`}
          >
            {children}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
