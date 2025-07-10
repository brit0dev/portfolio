import React from 'react';
import type {Project} from '@/types/pages/projects';

const ProjectCard = ({
  title,
  description,
  images,
  area,
  technologies,
  tags,
  view,
}: Project) => {
  return (
    <div className="flex flex-col border-[#C38A48] min-w-50 border-1 shadow-sm bg-white rounded-[0.625rem] overflow-hidden">
      <div className="relative  grid grid-cols-2 grid-rows-2 bg-white gap-0.5 h-60">
        {images.length > 2 ? (
          images
            .slice(0, 3)
            .map((image) => (
              <img
                src={image}
                alt={`${title} screenshot 1`}
                className="first:row-span-2 w-full h-full object-cover"
              />
            ))
        ) : (
          <img
            src={images[0]}
            alt={`${title} screenshot 1`}
            className="row-span-2 col-span-2 w-full h-full object-cover"
          />
        )}

        <div className="absolute top-1.25 left-1.25 z-1 flex items-center gap-2 px-1.5 bg-[#FFFCF4] border-1 border-[#D3C296] rounded-md overflow-hidden select-none">
          {area.map((area) => (
            <>
              <span className="flex items-center gap-1.25 py-0.25 font-medium text-[#A87C4A]">
                <span className="p-0.75 h-4 bg-orange-200 rounded-2xl"></span>
                {area}
              </span>
            </>
          ))}
        </div>
      </div>

      <div className="relative flex h-0.75 bg-orange-200">
        <div className="absolute flex h-11 bg-white gap-1 py-0.5 px-1 -top-6 right-1.5 drop-shadow-md rounded-lg">
          {technologies.map((item) => {
            const Icon = item.icon;
            return <Icon key={title + '-technology:' + item.name} width={36} />;
          })}
        </div>
      </div>

      <div className="flex flex-col gap-3 bg-[#FFFCF4]">
        <div className="flex flex-col ps-2.5 gap-0.5 mt-3">
          <div className="flex gap-1.75 items-center">
            <span className="p-0.75 h-5 bg-orange-200 rounded-2xl"></span>
            <h4 className="font-bold text-xl text-[#211900]">{title}</h4>
          </div>
          <p className="font-medium text-[#7A6E50]">{description}</p>
        </div>

        <div className="flex justify-between items-end">
          <div className="relative flex flex-1 flex-nowrap overflow-hidden gap-1.25 p-0.75">
            {tags.map((tag, index) => (
              <a
                key={index}
                href={`/projects?tag=${tag}`}
                className="flex gap-0.5 px-1.75 font-semibold text-orange-200 py-0.5 border-[#FFC396] border-1 rounded-md hover:text-[#E8A75C]"
              >
                <span className="text-[#E8A75C]">#</span>
                {tag}
              </a>
            ))}
            <div className="absolute bottom-0 right-0 h-24 w-10 bg-gradient-to-l from-white to-transparent"></div>
          </div>

          {view && (
            <div className="relative">
              <div className="z-0 relative flex items-center bg-orange-200 border-1 border-b-0 border-r-0 border-[#C38A48] text-white px-2.75 p-1 rounded-tl-lg space-x-2">
                {view.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <React.Fragment key={title + '-tag:' + index}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={item.type}
                        className="flex gap-1.25 items-center font-medium text-[#764A19] hover:opacity-60 transition-all capitalize"
                      >
                        <Icon width={18} height={18} />
                        {item.type}
                      </a>
                      {index < view.length - 1 && (
                        <span className="text-[#C38A48]">|</span>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              <div className="absolute -bottom-[1px] -left-[calc(0.75rem-1px)] w-3 h-4 bg-orange-200 rounded-tl-full z-1"></div>
              <div className="absolute -bottom-[1px] -left-[calc(0.75rem-1px)] w-3 h-4 bg-white border-r-1 border-b-1 border-[#C38A48] rounded-br-full z-2"></div>

              <div className="absolute -top-[calc(1rem-1px)] -right-[1px] w-3 h-4 bg-orange-200 rounded-tl-full z-1"></div>
              <div className="absolute -top-[calc(1rem-1px)] -right-[1px] w-3 h-4 bg-white border-r-1 border-b-1 border-[#C38A48] rounded-br-full z-2"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
