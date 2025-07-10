import ProjectCard from '../../components/ProjectCard';
import {projects} from './projectData.tsx';
import type {SectionProps} from '../../types/common';

const Projects = ({isScrolled}: SectionProps) => {
  return (
    <section id="projects" className="snap-start h-full snap-always">
      <h2 className="sticky top-0 z-10 text-3xl bg-orange-200 h-18 flex items-center">
        Projetos
      </h2>
      <div className="grid bg-[#FFFDF9] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-5 px-6 ">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
