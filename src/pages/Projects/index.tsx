import ProjectCard from '@/components/pages/Projects/ProjectCard';
import {projects} from '@/pages/Projects/projectData.tsx';
import type {SectionProps} from '@/types/common';
import SectionHeader from '@/components/common/SectionHeader';
import {CodeIcon} from '@/components/common/icons';

const Projects = ({isScrolled}: SectionProps) => {
  return (
    <section id="projects" className="xl:snap-start h-full ">
      <SectionHeader
        isSticky
        isOnPage={isScrolled}
        icon={{SVGComp: CodeIcon, offSet: {left: '1px'}}}
        isShadow
      >
        Projetos
      </SectionHeader>
      <div className="grid bg-background-light grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-5 px-7 ">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
