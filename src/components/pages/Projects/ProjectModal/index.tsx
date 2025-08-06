import {useEffect, useState, useRef} from 'react';
import type {Project} from '@/types/pages/projects';
import {
  ExternalLinkIcon,
  FigmaIcon,
  GithubIcon,
} from '@/components/common/icons';

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

const ProjectModal = ({project, onClose}: ProjectModalProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(onClose, 300); // Duration of the animation
  };

  const handleNavigation = (direction: 'next' | 'prev') => {
    if (!scrollContainerRef.current) return;

    const newIndex =
      direction === 'next'
        ? (currentImageIndex + 1) % project.images.length
        : (currentImageIndex - 1 + project.images.length) %
          project.images.length;

    const targetImage = scrollContainerRef.current.children[
      newIndex
    ] as HTMLElement;

    if (targetImage) {
      targetImage.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
      setCurrentImageIndex(newIndex);
    }
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    setIsAnimating(true);
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const viewIcons = {
    demo: ExternalLinkIcon,
    github: GithubIcon,
    figma: FigmaIcon,
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background-light/70 backdrop-blur-md transition-opacity duration-300 ${
        isAnimating ? 'bg-opacity-50' : 'bg-opacity-0'
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative grid grid-cols-1 bg-background rounded-lg shadow-[0px_0px_20px_1px] shadow-gray-500/30 border-primary border-1 w-11/12 max-w-5xl max-h-[90vh] overflow-y-auto pt-1.5 pb-0 transform transition-all duration-300 ease-in-out ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute z-10 right-2 top-2 bg-background-light shadow-md rounded-full w-7 h-7 overflow-hidden text-text-secondary hover:text-text-primary text-3xl leading-none"
        >
          <div className="-translate-y-[0.16rem]">&times;</div>
        </button>
        {/* --- Image Carousel Start --- */}
        <div className="group select-none relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-1 scroll-snap-x-mandatory scroll-smooth hide-scrollbar"
          >
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                className={`max-h-96 flex-shrink-0 first-of-type:rounded-l-none last-of-type:rounded-r-none rounded-md object-cover snap-center transition-opacity duration-300 ${
                  currentImageIndex !== index ? 'opacity-70' : 'opacity-100'
                }`}
              />
            ))}
          </div>
          {project.images.length > 1 && (
            <>
              {/* Previous Button Control */}
              <div
                className="hover:opacity-100 opacity-0 absolute pr-18 top-0 bottom-0 left-0 flex items-center cursor-pointer transition-opacity duration-300"
                onClick={() => handleNavigation('prev')}
              >
                <div className="absolute inset-0 w-full bg-gradient-to-r from-black/30 to-transparent pointer-events-none opacity-100"></div>
                <button
                  onClick={() => handleNavigation('prev')}
                  className="relative bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition z-10 ml-2"
                >
                  &#10094;
                </button>
              </div>

              {/* Next Button Control */}
              <div
                className="hover:opacity-100 opacity-0 absolute pl-18 top-0 bottom-0 right-0 flex items-center cursor-pointer transition-opacity duration-300"
                onClick={() => handleNavigation('next')}
              >
                <div className="absolute inset-0 w-full bg-gradient-to-l from-black/30 to-transparent pointer-events-none opacity-100"></div>
                <button
                  onClick={() => handleNavigation('next')}
                  className="relative bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition z-10 mr-2"
                >
                  &#10095;
                </button>
              </div>

              {/* Indicator Control */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-2 left-1/2 -translate-x-1/2">
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full pointer-events-none"></div>
                <div className="relative text-white text-xs px-2 py-1">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              </div>
            </>
          )}
        </div>
        {/* --- Image Carousel End --- */}
        <div className="grid grid-cols-2 grid-flow-col max-sm:row-start-1 pt-1.25 pb-2.25 items-start sm:mt-3 sm:pt-0 sm:pb-0 px-4">
          <div className="flex gap-2 items-center">
            <span className="p-0.75 h-6.75 bg-primary rounded-2xl"></span>
            <h2 className="text-3xl font-bold text-text-primary">
              {project.title}
            </h2>
          </div>
          <div className="absolute bg-background-light right-2 p-1 shadow-sm rounded-xl">
            <div className="flex flex-wrap gap-1">
              <span className="flex items-center gap-2 bg-text-dark text-background px-3 py-1 font-medium rounded-lg">
                Technologies:
              </span>

              {project.technologies.map(({name, icon: Icon}) => (
                <span
                  key={name}
                  className="flex items-center gap-2 bg-background text-text-dark sm:pl-1 sm:pr-3 rounded-lg"
                >
                  <Icon className="rounded-md w-7.5 h-7.5" />
                  <span className="max-sm:hidden">{name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="text-text-primary text-lg py-3 px-4">
          {project.description[0]}
        </p>

        <div className="mt-2 px-4 py-4 flex flex-wrap sm:flex-nowrap justify-between gap-y-1.5 gap-x-20 bg-primary/20 overflow-hidden">
          <div className="flex items-center flex-nowrap gap-1 ">
            <span className="flex items-center gap-2 bg-text-dark text-background px-3 py-1 font-medium rounded-lg">
              Links:
            </span>
            <div className="flex gap-1 items-center">
              {project.view?.map(({type, link}, index) => {
                const Icon = viewIcons[type];
                return (
                  <a
                    key={type}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-text-label hover:text-text-label/80 font-medium hover:underline"
                  >
                    <Icon width={24} />
                    <span className="capitalize">{type}</span>
                    {index < project.view.length - 1 && <span>|</span>}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex sm:max-w-[60%] lg:max-w-[70%] justify-between gap-1 pr-1 items-center">
            <span className="flex items-center gap-2 bg-accent text-text-secondary px-3 py-1 font-medium rounded-lg">
              Tags:
            </span>
            <div className="flex flex-nowrap overflow-x-scroll gap-1.25 p-0.75">
              {project.tags.map((tag, index) => (
                <>
                  <a
                    key={index}
                    href={`/projects?tag=${tag}`}
                    className="flex gap-0.5 px-1.75 font-semibold text-primary py-0.5 border-primary border-1 rounded-md hover:text-[#E8A75C]"
                  >
                    <span className="text-[#E8A75C]">#</span>
                    {tag}
                  </a>
                  <a
                    key={index}
                    href={`/projects?tag=${tag}`}
                    className="flex gap-0.5 px-1.75 font-semibold text-primary py-0.5 border-primary border-1 rounded-md hover:text-[#E8A75C]"
                  >
                    <span className="text-[#E8A75C]">#</span>
                    {tag}
                  </a>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
