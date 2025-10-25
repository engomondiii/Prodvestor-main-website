/**
 * PRODVESTOR WEBSITE - PROCESS STEP COMPONENT
 * FILE LOCATION: src/components/sections/Process/ProcessStep.js
 */

import React from 'react';
import './ProcessStep.css';

function ProcessStep({ step, index, isLast }) {
  return (
    <div className="process-step">
      <div className="process-step__number">{index + 1}</div>
      
      {step.icon && (
        <div className="process-step__icon">{step.icon}</div>
      )}
      
      <h3 className="process-step__title">{step.title}</h3>
      
      <p className="process-step__description">{step.description}</p>

      {!isLast && (
        <div className="process-step__connector">→</div>
      )}
    </div>
  );
}

export default ProcessStep;