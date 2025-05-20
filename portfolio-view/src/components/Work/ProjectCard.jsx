import React from 'react';
import PropTypes from 'prop-types';
import './work.css';

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div
      className={
        'relative rounded-2xl bg-zinc-800 p-4 ring-1 ring-inset ring-zinc-50/5 transition-colors hover:bg-zinc-700/50 active:bg-zinc-700/60' +
        classes
      }
    >
      <figure className="img-box mb-4 aspect-square rounded-lg">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className="grid h-8 items-center rounded-lg bg-zinc-50/5 px-3 text-sm text-zinc-400"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        {/* 
        <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
          </span>
        </div> */}
        {/* <a href={projectLink} target="_blank" className="absolute inset-0"></a> */}
      </div>
    </div>
  );
};
ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  classes: PropTypes.string,
};
export default ProjectCard;
