/**
 * PRODVESTOR WEBSITE - BADGE COMPONENT
 * FILE LOCATION: src/components/common/Badge/Badge.js
 */

import React from 'react';
import './Badge.css';

function Badge({
  children,
  variant = 'default',
  size = 'medium',
  rounded = false,
  className = '',
  ...props
}) {
  const classes = [
    'badge',
    `badge--${variant}`,
    `badge--${size}`,
    rounded && 'badge--rounded',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}

export default Badge;