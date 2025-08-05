import React from 'react';
import type {Project} from '@/types/pages/projects';

type ProjectCardProps = Project & {
  onCardClick: (project: Project) => void;
};

const ProjectCard = (props: ProjectCardProps) => {
  const {title, description, images, area, technologies, tags, view} = props;
  return (
    <div className="flex flex-col border-primary-dark min-w-50 border-1 shadow-sm bg-background-light rounded-[0.625rem] overflow-hidden">
      <div
        className="relative grid grid-cols-2 grid-rows-2 bg-background-light gap-0.5 h-53 xs:h-60 cursor-pointer"
        onClick={() => props.onCardClick(props)}
      >
        {images.length > 2 ? (
          images
            .slice(0, 3)
            .map((image, index) => (
              <img
                src={image}
                alt={`${title} screenshot ${index}`}
                key={`${title} screenshot ${index}`}
                className="first:row-span-2 w-full h-full object-cover"
              />
            ))
        ) : (
          <img
            src={images[0]}
            alt={`${title} screenshot`}
            className="row-span-2 col-span-2 w-full h-full object-cover"
          />
        )}

        <div className="absolute top-1.25 left-1.25 z-1 flex items-center gap-2 px-1.5 bg-background border-1 border-button-border rounded-md overflow-hidden select-none">
          {area.map((area, index) => (
            <span
              key={index}
              className="flex items-center gap-1.25 py-0.25 font-medium text-text-light"
            >
              <span className="p-0.75 h-4 bg-primary rounded-2xl"></span>
              {area}
            </span>
          ))}
        </div>
      </div>

      <div className="relative flex h-0.75 bg-secondary">
        <div className="absolute flex h-11 bg-background-light gap-1 py-0.5 px-1 -top-6 right-1.5 drop-shadow-md rounded-lg">
          {technologies
            .sort((a, b) => b.name.localeCompare(a.name))
            .map(item => {
              const Icon = item.icon;
              return (
                <span
                  key={title + '-technology:' + item.name}
                  title={item.name}
                >
                  <Icon width={36} />
                </span>
              );
            })}
        </div>
      </div>

      <div className="flex flex-col gap-3 bg-background">
        <div className="flex flex-col ps-2.5 gap-0.5 mt-3">
          <div className="flex gap-1.75 items-center">
            <span className="p-0.75 h-5 bg-primary rounded-2xl"></span>
            <h4 className="font-semibold text-xl text-text-primary">{title}</h4>
          </div>
          <p className="font-medium text-text-secondary truncate">
            {description}
          </p>
        </div>
        <div className="flex justify-between items-end">
          <div className="relative flex flex-1 flex-nowrap overflow-hidden gap-1.25 p-0.75">
            {tags.map((tag, index) => (
              <a
                key={index}
                href={`/projects?tag=${tag}`}
                className="flex gap-0.5 px-1.75 font-semibold text-primary py-0.5 border-primary border-1 rounded-md hover:text-[#E8A75C]"
              >
                <span className="text-[#E8A75C]">#</span>
                {tag}
              </a>
            ))}
            <div className="absolute bottom-0 right-0 h-24 w-10 bg-gradient-to-l from-background to-transparent"></div>
          </div>

          {view && (
            <div className="relative">
              <div className="z-0 relative flex items-center bg-secondary-darker border-1 border-b-0 border-r-0 border-primary-dark text-white px-2.75 p-1 rounded-tl-lg space-x-2">
                {view.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <React.Fragment key={title + '-tag:' + index}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={item.type}
                        className="flex gap-1.25 items-center  font-medium text-background hover:opacity-60 transition-all capitalize"
                      >
                        <Icon width={18} height={18} />
                        {item.type}
                      </a>
                      {index < view.length - 1 && (
                        <span className="text-primary-dark">|</span>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              <div className="absolute -bottom-[1px] -left-[calc(0.75rem-1px)] w-3 h-4 bg-secondary-darker rounded-tl-full z-1"></div>
              <div className="absolute -bottom-[1px] -left-[calc(0.75rem-1px)] w-3 h-4 bg-background border-r-1 border-b-1 border-primary-dark rounded-br-full z-2"></div>

              <div className="absolute -top-[calc(1rem-1px)] -right-[1px] w-3 h-4 bg-secondary-darker rounded-tl-full z-1"></div>
              <div className="absolute -top-[calc(1rem-1px)] -right-[1px] w-3 h-4 bg-background border-r-1 border-b-1 border-primary-dark rounded-br-full z-2"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
