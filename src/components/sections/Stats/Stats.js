/**
 * PRODVESTOR WEBSITE - STATS SECTION
 * FILE LOCATION: src/components/sections/Stats/Stats.js
 */

import React from 'react';
import StatCard from './StatCard';
import './Stats.css';

function Stats({
  title,
  subtitle,
  stats,
  variant = 'default',
  columns = 4,
  className = '',
  ...props
}) {
  const defaultStats = [
    {
      icon: '🚀',
      number: '100+',
      label: 'Projects Completed'
    },
    {
      icon: '😊',
      number: '50+',
      label: 'Happy Clients'
    },
    {
      icon: '⭐',
      number: '10+',
      label: 'Years Experience'
    },
    {
      icon: '👥',
      number: '20+',
      label: 'Team Members'
    }
  ];

  const statsData = stats || defaultStats;

  return (
    <section className={`stats-section stats-section--${variant} ${className}`} {...props}>
      <div className="stats-section__container container">
        {/* Header */}
        {(title || subtitle) && (
          <div className="stats-section__header">
            {subtitle && (
              <p className="stats-section__subtitle">{subtitle}</p>
            )}
            
            {title && (
              <h2 className="stats-section__title">{title}</h2>
            )}
          </div>
        )}

        {/* Stats Grid */}
        <div className={`stats-section__grid stats-section__grid--${columns}`}>
          {statsData.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;