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
  const onPageClasses = isOnPage ? 'bg-[#FFFEFD]' : 'bg-orange-200';
  const shadow = isShadow ? 'shadow-[1px_1px_2px_rgb(20,20,20,0.1)]' : '';
  const borderType = dashed ? 'dashed-border-b' : 'border-b border-[#C38A48]';
  const Icon = icon?.SVGComp;
  const offSet = `-top-[${icon?.offSet?.top}] -left-[${icon?.offSet?.left}]`;

  return (
    <div
      className={`text-3xl h-18 flex items-center gap-1 ${onPageClasses} ${stickyClasses} ${shadow} ${isOnPage && borderType} select-none transition duration-200`}
    >
      <div className=" flex py-1 h-12 w-14.5 bg-orange-200 rounded-r-[0.625rem]">
        <div className="w-1.5 bg-[#F6B76E] rounded-r-[0.625rem]"></div>
        <div className="flex flex-1 items-center relative justify-center">
          {Icon && <Icon className={`absolute z-10 ${offSet}`} />}

          <div className="flex items-center justify-center w-11 h-8 border-1 border-[#BF9F7A] relative z-0 transform-[rotateZ(-10deg)]">
            <div className="w-1.75 h-1.75 absolute bg-[#FFF7E9] border-1 border-[#C59437] -top-0.75 -left-0.75 rounded-xs shadow-xs"></div>
            <div className="w-1.75 h-1.75 absolute bg-[#FFF7E9] border-1 border-[#C59437] -top-0.75 -right-0.75 rounded-xs shadow-xs"></div>
            <div className="w-1.75 h-1.75 absolute bg-[#FFF7E9] border-1 border-[#C59437] -bottom-0.75 -left-0.75 rounded-xs shadow-xs"></div>
            <div className="w-1.75 h-1.75 absolute bg-[#FFF7E9] border-1 border-[#C59437] -bottom-0.75 -right-0.75 rounded-xs shadow-xs"></div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-[#FFFCF4] h-12 relative dashed-border-l dashed-border-r section-border-y rounded-[0.625rem]">
        <div className="relative px-3.75 z-0">
          <h2
            className={`font-semibold text-[#211900] text-3xl leading-7.5 dashed-border-b dashed-border-t section-border-x`}
          >
            {children}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
