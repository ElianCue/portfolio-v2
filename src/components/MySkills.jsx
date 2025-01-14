import { SKILLS_FAVICON } from '../constants';
import SkillCard from './SkillCard';

const MySkills = () => {

  return (
    <section className="container mx-auto py-44 flex flex-col items-center">
      <h2 className="text-primary text-3xl font-extrabold mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {SKILLS_FAVICON.map((SKILLS_FAVICON) => (
          <SkillCard key={SKILLS_FAVICON.name} icon={SKILLS_FAVICON.icon} skillName={SKILLS_FAVICON.name} />
        ))}
      </div>
    </section>
  );
};

export default MySkills;
