import React from 'react';
import './work.css';
import ProjectCard from './ProjectCard';

const Work = () => {
  const works = [
    {
      imgSrc: '/images/fwm-project.jpeg',
      title: 'FWM Cab Advertising System',
      tags: ['Web-design', 'MVC', 'Development'],
      // projectLink: 'https://musify-5al0.onrender.com/',
    },
    {
      imgSrc: '/images/project-2.jpg',
      title: 'Free stock photo app',
      tags: ['API', 'SPA'],
      // projectLink: 'https://pixstock-official.vercel.app/',
    },

    {
      imgSrc: '/images/project-4.jpg',
      title: 'Real state website',
      tags: ['Web-design', 'Development'],
      // projectLink: 'https://github.com/codewithsadee-org/wealthome',
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'eCommerce website',
      tags: ['eCommerce', 'Development'],
      // projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website',
    },
    {
      imgSrc: '/images/project-6.jpg',
      title: 'vCard Personal portfolio',
      tags: ['Web-design', 'Development'],
      // projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio',
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Currency Converter',
      tags: ['Exchange Rates', 'API'],
      // projectLink: '',
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Games',
      tags: ['Entertainment', 'Game'],
      // projectLink: '',
    },

  ];

  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">My portfolio highlights</h2>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-x-4 gap-y-5">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
            // projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
