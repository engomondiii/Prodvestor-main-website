/**
 * PRODVESTOR WEBSITE - STAT CARD COMPONENT
 * FILE LOCATION: src/components/sections/Stats/StatCard.js
 */

import React from 'react';
import './StatCard.css';

function StatCard({ icon, number, label, prefix = '', suffix = '' }) {
  return (
    <div className="stat-card">
      {icon && (
        <div className="stat-card__icon">{icon}</div>
      )}
      
      <div className="stat-card__number">
        {prefix}{number}{suffix}
      </div>
      
      <div className="stat-card__label">
        {label}
      </div>
    </div>
  );
}

export default StatCard;