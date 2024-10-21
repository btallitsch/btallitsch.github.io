import React from 'react';
import resume from '../data/resume.json';

const Skills: React.FC = () => {
  const { technical_skills } = resume;

  return (
    <section className="p-5">
      <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.keys(technical_skills).map((skillCategory, index) => (
          <div key={index} className="bg-base-100 shadow p-4 rounded-lg">
            <h3 className="font-bold">{skillCategory}</h3>
            <ul className="list-disc pl-5">
              {technical_skills[skillCategory as keyof typeof technical_skills].map((skill: string, idx: number) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
