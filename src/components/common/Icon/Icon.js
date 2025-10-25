/**
 * PRODVESTOR WEBSITE - ICON COMPONENT
 * FILE LOCATION: src/components/common/Icon/Icon.js
 */

import React from 'react';
import './Icon.css';

function Icon({
  name,
  size = 'medium',
  color,
  className = '',
  ...props
}) {
  const classes = [
    'icon',
    `icon--${size}`,
    color && `icon--${color}`,
    className
  ]
    .filter(Boolean)
    .join(' ');

  // Icon mapping (you can expand this or use an icon library)
  const icons = {
    check: '✓',
    close: '✕',
    menu: '☰',
    search: '🔍',
    user: '👤',
    email: '✉',
    phone: '📞',
    location: '📍',
    'arrow-right': '→',
    'arrow-left': '←',
    'arrow-up': '↑',
    'arrow-down': '↓',
    star: '★',
    heart: '♥',
    info: 'ℹ',
    warning: '⚠',
    error: '✕',
    success: '✓',
    home: '🏠',
    settings: '⚙',
    calendar: '📅',
    clock: '🕐',
    document: '📄',
    folder: '📁',
    download: '⬇',
    upload: '⬆',
    edit: '✎',
    delete: '🗑',
    add: '+',
    minus: '-',
    external: '↗'
  };

  return (
    <span className={classes} aria-hidden="true" {...props}>
      {icons[name] || name}
    </span>
  );
}

export default Icon;