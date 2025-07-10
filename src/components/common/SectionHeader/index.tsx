import type {SectionHeaderProps} from '@/types/common';

const SectionHeader = ({
  children,
  isSticky = false,
  isOnPage = false,
  isShadow = false,
  dashed = false,
}: SectionHeaderProps) => {
  const stickyClasses = isSticky ? 'sticky top-0 z-10' : '';
  const onPageClasses = isOnPage
    ? 'bg-[#FFFEFD] border-b border-[#C38A48]'
    : 'bg-orange-200';
  const shadow = isShadow ? 'shadow-[1px_1px_2px_rgb(20,20,20,0.1)]' : '';
  const borderType = dashed ? 'border-dashed' : '';

  return (
    <div
      className={`text-3xl h-18 flex items-center ${onPageClasses} ${stickyClasses} ${shadow} ${borderType} transition duration-200`}
    >
      <div className=" flex py-1 h-12 w-2 bg-orange-200 rounded-r-md">
        <div className="w-1.5 bg-[#F6B76E] rounded-r-md"></div>
        <div></div>
      </div>

      <h2 className={`text-3xl`}>{children}</h2>
    </div>
  );
};

export default SectionHeader;
