import { MY_PROJECTS } from "../constants";
import ProjectCard from "./ProjectCard";

const MyProjects = () => {
  return (
    <section className="flex flex-col mt-10 w-full h-auto gap-6 m-auto container place-items-center">
      <div>
        <h2 className="text-2xl font-extrabold text-primary ">Mis Proyectos</h2>
      </div>
      <article className="grid grid-cols-1 md:grid-cols-3  w-full h-auto gap-6 m-auto container place-items-center">
        {MY_PROJECTS.map((project) => (
            <ProjectCard
            key={project.id}
            cardTechnology={project.technologies}
            cardDescription={project.description}
            cardImage={project.image}
            link_deploy={project.link_deploy}
            link_github={project.link_github}
            />
        ))}
      </article>
    </section>
  );
};

export default MyProjects;
