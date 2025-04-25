import React from 'react';
import './about.css';

const About = () => {
  const aboutItems = [
    {
      label: 'Project done',
      number: 45,
    },
    {
      label: 'Years of experience',
      number: 10,
    },
  ];
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="rounded-2xl bg-zinc-800/50 p-7 md:p-12">
          <p className="mb-4 text-zinc-300 md:mb-8 md:max-w-[60ch] md:text-xl">
            Hi, I'm Akshay — an enthusiastic and proactive web developer with a
            passion for creating visually appealing and highly functional
            websites. I love solving real-world problems through code and am
            always learning and pushing myself to deliver high-quality,
            innovative digital experiences that not only look great but also
            perform flawlessly.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="font-semibold text-sky-400 md:text-3xl">+</span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img
              src="/images/logo.svg"
              alt="logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
