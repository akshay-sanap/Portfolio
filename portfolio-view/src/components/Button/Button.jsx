import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

// Primary Button
const ButtonPrimary = ({ href, target, label, icon, classes }) => {
  const content = (
    <>
      {label}
      {icon && (
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  );

  return href ? (
    <a
      href={href}
      target={target || '_self'}
      className={`btn btn-primary ${classes || ''}`}
    >
      {content}
    </a>
  ) : (
    <button className={`btn btn-primary ${classes || ''}`}>{content}</button>
  );
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

// Secondary Button
const ButtonOutline = ({ href, target, label, icon, classes }) => {
  const content = (
    <>
      {label}
      {icon && (
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  );

  return href ? (
    <a
      href={href}
      target={target || '_self'}
      className={`btn btn-outline ${classes || ''}`}
    >
      {content}
    </a>
  ) : (
    <button className={`btn btn-outline ${classes || ''}`}>{content}</button>
  );
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

export { ButtonPrimary, ButtonOutline };
