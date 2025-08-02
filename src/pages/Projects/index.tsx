import ProjectCard from '@/components/pages/Projects/ProjectCard';
import {projects} from '@/data/projects.ts';
import type {SectionProps} from '@/types/common';
import SectionHeader from '@/components/common/SectionHeader';
import {CodeIcon} from '@/components/common/icons';
import {useIsMobile} from '@/hooks/useIsMobile';

const Projects = ({isScrolled}: SectionProps) => {
  const isMobile = useIsMobile();

  return (
    <section id="projects" className={`${!isMobile && 'snap-start'} h-full `}>
      <SectionHeader
        isSticky
        isOnPage={isScrolled}
        icon={{SVGComp: CodeIcon, offSet: {left: '1px'}}}
        isShadow
      >
        Projetos
      </SectionHeader>
      <div className="grid bg-background-light grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 py-5 px-3 xs:px-5 md:px-7 ">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
