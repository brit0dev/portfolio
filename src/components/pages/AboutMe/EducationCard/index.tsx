import type {Education} from '@/types/pages/aboutme';

const EducationCard = ({
  education,
  acronym,
  fullName,
  courseType,
  initialYear,
  finalYear,
}: Education) => {
  //<p><span className="font-medium text-primary-dark px-1 py-0.5 m-1 border-primary border-1 rounded-md">{acronym}</span>{fullName}, {finalYear}</p>

  return (
    <div className="bg-primary pl-1 rounded-lg border-primary-dark min-w-50 border-1 shadow-sm">
      <div className="flex flex-col gap-1.25 text-nowrap place-items-center xs:items-start bg-background-light p-2.5 rounded-lg">
        <div className="flex flex-1 w-full justify-between items-center">
          <div className="flex gap-1.5 items-center">
            <span className="p-0.75 h-4 bg-primary rounded-2xl"></span>
            <h4 className="font-semibold text-lg text-text-primary">
              {education}
            </h4>
          </div>
          <span className="border-1 border-success-border text-success-text text-[0.8rem] rounded-md px-1.75 py-0.25 bg-success">
            Concluído
          </span>
        </div>
        <div className="flex w-full flex-col gap-1 items-start">
          <p className="flex w-full gap-1 text-text-secondary overflow-hidden">
            <span className="font-medium text-primary-dark px-1 py 0.5 border-primary border-1 rounded-md">
              {acronym}
            </span>
            <span className="truncate w-full">{fullName}</span>
          </p>
          <div className="flex items-center py-[1px] pr-[1px] text-[#764A19] bg-primary border-primary-dark border-1 border-l-3 rounded-md text-sm">
            <span className="px-2.5 py-0">{courseType}</span>
            <span className="bg-background-light py-0.5 px-1.5 rounded-md">
              {initialYear} - {finalYear}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
