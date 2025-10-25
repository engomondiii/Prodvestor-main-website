/**
 * PRODVESTOR WEBSITE - CARD COMPONENT
 * FILE LOCATION: src/components/common/Card/Card.js
 */

import React from 'react';
import './Card.css';

function Card({
  children,
  variant = 'default',
  padding = 'medium',
  hoverable = false,
  onClick,
  className = '',
  ...props
}) {
  const classes = [
    'card',
    `card--${variant}`,
    `card--padding-${padding}`,
    hoverable && 'card--hoverable',
    onClick && 'card--clickable',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} onClick={onClick} {...props}>
      {children}
    </div>
  );
}

// Card sub-components
Card.Header = function CardHeader({ children, className = '', ...props }) {
  return (
    <div className={`card__header ${className}`} {...props}>
      {children}
    </div>
  );
};

Card.Body = function CardBody({ children, className = '', ...props }) {
  return (
    <div className={`card__body ${className}`} {...props}>
      {children}
    </div>
  );
};

Card.Footer = function CardFooter({ children, className = '', ...props }) {
  return (
    <div className={`card__footer ${className}`} {...props}>
      {children}
    </div>
  );
};

Card.Image = function CardImage({ src, alt, className = '', ...props }) {
  return (
    <div className={`card__image ${className}`} {...props}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
};

Card.Title = function CardTitle({ children, className = '', ...props }) {
  return (
    <h3 className={`card__title ${className}`} {...props}>
      {children}
    </h3>
  );
};

Card.Text = function CardText({ children, className = '', ...props }) {
  return (
    <p className={`card__text ${className}`} {...props}>
      {children}
    </p>
  );
};

export default Card;