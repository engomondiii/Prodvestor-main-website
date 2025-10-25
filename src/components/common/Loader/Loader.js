/**
 * PRODVESTOR WEBSITE - LOADER COMPONENT
 * FILE LOCATION: src/components/common/Loader/Loader.js
 */

import React from 'react';
import './Loader.css';

function Loader({
  size = 'medium',
  variant = 'spinner',
  color = 'primary',
  fullScreen = false,
  text,
  className = '',
  ...props
}) {
  const classes = [
    'loader',
    `loader--${size}`,
    `loader--${variant}`,
    `loader--${color}`,
    fullScreen && 'loader--full-screen',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      <div className="loader__spinner" />
      {text && <p className="loader__text">{text}</p>}
    </>
  );

  if (fullScreen) {
    return (
      <div className={classes} {...props}>
        <div className="loader__container">{content}</div>
      </div>
    );
  }

  return (
    <div className={classes} {...props}>
      {content}
    </div>
  );
}

export default Loader;