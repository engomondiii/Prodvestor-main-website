/**
 * PRODVESTOR WEBSITE - BUTTON COMPONENT
 * FILE LOCATION: src/components/common/Button/Button.js
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  loading = false,
  to,
  href,
  type = 'button',
  onClick,
  className = '',
  ...props
}) {
  // Base classes
  const baseClass = 'btn';
  const classes = [
    baseClass,
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth && 'btn--full-width',
    loading && 'btn--loading',
    disabled && 'btn--disabled',
    className
  ]
    .filter(Boolean)
    .join(' ');

  // Button content
  const content = (
    <>
      {loading && <span className="btn__spinner" />}
      <span className="btn__content">{children}</span>
    </>
  );

  // Render as Link (internal)
  if (to && !disabled) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  // Render as anchor (external)
  if (href && !disabled) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;