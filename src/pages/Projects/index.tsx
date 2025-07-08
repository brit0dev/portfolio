import ProjectCard from '../../components/ProjectCard';
import {projects} from './projectData.tsx';

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="text-3xl bg-orange-200 p-1 h-18 flex items-center">
        Projetos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-4 px-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
