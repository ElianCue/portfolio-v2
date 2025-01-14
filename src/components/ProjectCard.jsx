import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ({ cardImage, cardDescription, cardTechnology, link_deploy, link_github, cardTitle }) => {
  return (
    <div className="w-80 h-96 rounded overflow-hidden container shadow-lg shadow-surface hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105 bg-surface hover:cursor-pointer">
      <div className="h-40">
        <img src={cardImage} alt="Project" className="w-full h-full object-cover" />
      </div>
      <div className="px-6 py-4 flex flex-col justify-between h-[calc(100%-10rem)]">
        <ul className="flex flex-wrap items-center justify-start space-x-1 mb-4 overflow-hidden">
          {cardTechnology.map((tech) => (
            <li
              key={tech.id}
              className="text-[10px] font-semibold bg-text-primary text-surface py-1 px-3 my-1 rounded-full"
            >
              {tech.title}
            </li>
          ))}
        </ul>
        <p className="text-text-primary text-base flex-grow overflow-hidden overflow-ellipsis">
          {cardDescription}
        </p>
        <div className="flex space-x-4 mt-4">
          <a href={link_github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-text-secondary">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href={link_deploy} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-text-secondary">
            <FontAwesomeIcon icon={faLink} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
