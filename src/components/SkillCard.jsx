import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillCard = ({ icon, skillName }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
      <FontAwesomeIcon className="text-6xl text-primary mb-4" icon={icon} />
      <p className="text-xl font-semibold text-gray-700">{skillName}</p>
    </div>
  );
};

export default SkillCard;
