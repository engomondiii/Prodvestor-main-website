/**
 * PRODVESTOR WEBSITE - SELECT COMPONENT
 * FILE LOCATION: src/components/common/Select/Select.js
 */

import React, { forwardRef } from 'react';
import './Select.css';

const Select = forwardRef(({
  label,
  name,
  id,
  value,
  options = [],
  placeholder = 'Select an option',
  error,
  helperText,
  required = false,
  disabled = false,
  fullWidth = false,
  size = 'medium',
  onChange,
  onBlur,
  onFocus,
  className = '',
  ...props
}, ref) => {
  const selectId = id || name;
  
  const classes = [
    'select-wrapper',
    fullWidth && 'select-wrapper--full-width',
    error && 'select-wrapper--error',
    disabled && 'select-wrapper--disabled',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const selectClasses = [
    'select',
    `select--${size}`
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {label && (
        <label htmlFor={selectId} className="select__label">
          {label}
          {required && <span className="select__required">*</span>}
        </label>
      )}
      
      <div className="select__container">
        <select
          ref={ref}
          id={selectId}
          name={name}
          value={value}
          required={required}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          className={selectClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined
          }
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option
              key={option.value || index}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        
        <span className="select__arrow">▼</span>
      </div>

      {error && (
        <span id={`${selectId}-error`} className="select__error" role="alert">
          {error}
        </span>
      )}
      
      {!error && helperText && (
        <span id={`${selectId}-helper`} className="select__helper">
          {helperText}
        </span>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;