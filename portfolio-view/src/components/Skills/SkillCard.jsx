import React from 'react';
import './skillcard.css';
import PropTypes from 'prop-types';

const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div className={'ess-tools group ' + classes}>
      <figure className="h-12 w-12 overflow-hidden rounded-lg bg-zinc-700/50 p-2 transition-colors group-hover:bg-zinc-900">
        <img src={imgSrc} width={32} height={32} alt={label} />
      </figure>

      <div>
        <h3>{label}</h3>
        <p className="text-zinc-400 text-sm ">{desc}</p>
      </div>
    </div>
  );
};
SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};
export default SkillCard;
