import ProjectCard from '@/components/pages/Projects/ProjectCard';
import {projects} from '@/pages/Projects/projectData.tsx';
import type {SectionProps} from '@/types/common';
import SectionHeader from '@/components/common/SectionHeader';

const Projects = ({isScrolled}: SectionProps) => {
  return (
    <section id="projects" className="snap-start h-full snap-always">
      <SectionHeader isSticky isOnPage={isScrolled} isShadow>
        Projetos
      </SectionHeader>
      <div className="grid bg-[#FFFDF9] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-5 px-7 ">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
