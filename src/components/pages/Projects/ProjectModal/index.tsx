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
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-300 ${
        isAnimating ? 'bg-opacity-50' : 'bg-opacity-0'
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-background-light rounded-lg shadow-xl w-11/12 max-w-6xl max-h-[90vh] overflow-y-auto p-6 transform transition-all duration-300 ease-in-out ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start">
          <h2 className="text-3xl font-bold text-text-primary">
            {project.title}
          </h2>
          <button
            onClick={handleClose}
            className="text-text-secondary hover:text-text-primary text-3xl"
          >
            &times;
          </button>
        </div>
        <p className="text-text-secondary mt-2">{project.description}</p>

        {/* --- Image Carousel Start --- */}
        <div className="group select-none relative mt-4">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 scroll-snap-x-mandatory scroll-smooth hide-scrollbar"
          >
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                className={`max-h-96 flex-shrink-0 rounded-md object-cover snap-center transition-opacity duration-300 ${
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

        <div className="mt-4">
          <h3 className="text-xl font-semibold text-text-primary">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map(({name, icon: Icon}) => (
              <span
                key={name}
                className="flex items-center gap-2 bg-primary text-text-label px-3 py-1 rounded-full"
              >
                <Icon width={20} />
                {name}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-text-primary">Links</h3>
          <div className="flex gap-4 mt-2">
            {project.view?.map(({type, link}) => {
              const Icon = viewIcons[type];
              return (
                <a
                  key={type}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <Icon width={24} />
                  <span className="capitalize">{type}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
