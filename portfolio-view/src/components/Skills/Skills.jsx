import React from 'react';
import SkillCard from './SkillCard';
import './skills.css';
const Skills = () => {
  const skillItem = [
    {
      imgSrc: '/images/java-icon.svg',
      label: 'Java',
      desc: 'Programming',
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface',
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction',
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server',
    },
    {
      imgSrc: '/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework',
    },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database',
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework',
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface',
    },
    {
      imgSrc: '/images/bootstrap.svg',
      label: 'Bootstrap',
      desc: 'User Interface',
    },
  ];
  return (
    <section id='skills' className="section">
      <div className="container">
        <h2 className="headline-2">Essential Tools I use</h2>
        <p className="mb-8 mt-3 max-w-[50ch] text-zinc-400">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid-cols-[repeat(auto-fill,_minmax(250px,1fr))] grid gap-3">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
