import TagList from '@/components/common/TagList';
import type {EducationCardProps, EducationStatus} from '@/types/pages/aboutme';
import {useState} from 'react';

const EducationCard = ({data, expand}: EducationCardProps) => {
  const [isActive, setIsActive] = useState(false);
  const {
    education,
    acronym,
    description,
    courseType,
    initialYear,
    finalYear,
    status,
    topics,
  } = data;

  const statusStyles: Record<
    EducationStatus,
    {base: string; text: string; border: string}
  > = {
    Completed: {
      base: 'bg-success',
      text: 'text-success-text',
      border: 'border-success-border',
    },
    'In progress': {
      base: 'bg-ongoing',
      text: 'text-ongoing-text',
      border: 'border-ongoing-border',
    },
    'Partially Completed': {
      base: 'bg-incomplete',
      text: 'text-incomplete-text',
      border: 'border-incomplete-border',
    },
  };

  const handleMouseEnter = () => {
    if (expand) setIsActive(true);
  };

  const handleMouseLeave = () => {
    if (expand) setIsActive(false);
  };

  const currentStatusStyle = statusStyles[status];

  return (
    <div className="relative">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={` group bg-primary pl-1 rounded-lg border-primary-dark min-w-50 border-1 shadow-sm cursor-default ${expand && ' hover:absolute hover:z-100 hover:w-full cursor-pointer'}`}
      >
        <div className="flex flex-col gap-1.25 text-nowrap place-items-center xs:items-start bg-background-light p-2.5 rounded-lg">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-1.5 grid-flow-col w-full">
            <span className="p-0.75 h-4.5 bg-primary rounded-2xl"></span>
            <h4 className="font-semibold text-lg text-text-primary truncate">
              {education}
            </h4>
            <span
              className={`border-1 text-[0.8rem] rounded-md px-1.75 py-0.25 ${currentStatusStyle.base} ${currentStatusStyle.text} ${currentStatusStyle.border}`}
            >
              {status}
            </span>
          </div>
          <div
            className={`flex w-full flex-col gap-1 ${isActive && 'gap-2'} items-start`}
          >
            <div className="flex items-center py-[1px] pr-[1px] text-[#764A19] bg-primary border-primary-dark border-1 border-l-3 rounded-md text-sm max-w-full">
              <span className="font-medium text-primary-dark px-1 py 0.5 border-primary border-1 rounded-md">
                {acronym}
              </span>
              <span className="px-2.5 py-0 truncate">{courseType}</span>
              <span className="bg-background-light py-0.5 px-1.5 rounded-md">
                {initialYear === finalYear
                  ? initialYear
                  : `${initialYear} - ${finalYear}`}
              </span>
            </div>
            <div
              className={`flex flex-wrap w-full gap-1.5 text-text-secondary ${expand && 'group-hover:break-words group-hover:whitespace-normal group-hover:text-text-primary'} `}
            >
              <p
                className={`truncate w-full ${expand && 'group-hover:break-words group-hover:whitespace-normal'}`}
              >
                {description[0]}
              </p>

              {description.slice(1).map((paragraph, index) => (
                <p
                  key={index}
                  className={`${isActive || 'hidden'}  break-words whitespace-normal`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {topics && expand && (
              <div className={`flex w-full gap-1 pr-1 items-center`}>
                <TagList
                  list={topics}
                  wrap={isActive}
                  label={{show: isActive, text: 'Covered Subjects:'}}
                  highContrast={isActive}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
