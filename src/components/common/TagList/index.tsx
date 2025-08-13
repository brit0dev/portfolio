import type {TagListProps} from '@/types/common';

const TagList = ({list, wrap = false, label, highContrast}: TagListProps) => {
  return (
    <div
      className={`relative flex flex-1 ${wrap ? 'flex-wrap' : 'flex-nowrap'} overflow-hidden gap-1.25 p-0.75`}
    >
      <span
        className={`${label?.show || 'hidden'} items-center gap-2 ${highContrast ? 'bg-text-primary' : 'bg-background-light'} border-1 ${highContrast ? 'border-text-dark' : 'border-accent-dark'} ${highContrast ? 'text-background' : 'text-text-secondary'} font-medium px-2 py-1 rounded-md`}
      >
        {label?.text || 'Tags:'}
      </span>
      {list.map(({text, link}, index) => (
        <a
          key={index}
          {...(link && {href: `${link}`})}
          className={`flex gap-0.5 px-1.75 ${highContrast || 'font-semibold'}  items-center ${highContrast ? 'text-text-primary' : 'text-primary'} py-0.5 ${highContrast ? 'border-text-secondary' : 'border-primary'}  border-1 rounded-md ${highContrast ? 'hover:text-text-secondary' : 'hover:text-[#E8A75C]'}`}
        >
          <span
            className={`${highContrast ? 'text-accent w-2 h-2 bg-accent rounded-full ml-0.75 mr-1.5' : 'text-[#E8A75C]'}`}
          >
            {!highContrast && '#'}
          </span>
          {text}
        </a>
      ))}
      {!wrap && (
        <div className="absolute bottom-0 right-0 h-24 w-10 bg-gradient-to-l from-background to-transparent"></div>
      )}
    </div>
  );
};

export default TagList;
