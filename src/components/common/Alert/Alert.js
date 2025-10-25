/**
 * PRODVESTOR WEBSITE - ALERT COMPONENT
 * FILE LOCATION: src/components/common/Alert/Alert.js
 */

import React from 'react';
import './Alert.css';

function Alert({
  children,
  variant = 'info',
  title,
  icon,
  dismissible = false,
  onClose,
  className = '',
  ...props
}) {
  const classes = [
    'alert',
    `alert--${variant}`,
    dismissible && 'alert--dismissible',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const defaultIcons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  };

  const alertIcon = icon || defaultIcons[variant];

  return (
    <div className={classes} role="alert" {...props}>
      {alertIcon && <span className="alert__icon">{alertIcon}</span>}
      
      <div className="alert__content">
        {title && <h4 className="alert__title">{title}</h4>}
        <div className="alert__message">{children}</div>
      </div>

      {dismissible && (
        <button
          type="button"
          className="alert__close"
          onClick={onClose}
          aria-label="Close alert"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default Alert;