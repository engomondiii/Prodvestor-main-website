/**
 * PRODVESTOR WEBSITE - INPUT COMPONENT
 * FILE LOCATION: src/components/common/Input/Input.js
 */

import React, { forwardRef } from 'react';
import './Input.css';

const Input = forwardRef(({
  label,
  type = 'text',
  name,
  id,
  value,
  placeholder,
  error,
  helperText,
  required = false,
  disabled = false,
  fullWidth = false,
  size = 'medium',
  icon,
  onChange,
  onBlur,
  onFocus,
  className = '',
  ...props
}, ref) => {
  const inputId = id || name;
  
  const classes = [
    'input-wrapper',
    fullWidth && 'input-wrapper--full-width',
    error && 'input-wrapper--error',
    disabled && 'input-wrapper--disabled',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const inputClasses = [
    'input',
    `input--${size}`,
    icon && 'input--with-icon'
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {label && (
        <label htmlFor={inputId} className="input__label">
          {label}
          {required && <span className="input__required">*</span>}
        </label>
      )}
      
      <div className="input__container">
        {icon && <span className="input__icon">{icon}</span>}
        
        <input
          ref={ref}
          type={type}
          id={inputId}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          className={inputClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
          }
          {...props}
        />
      </div>

      {error && (
        <span id={`${inputId}-error`} className="input__error" role="alert">
          {error}
        </span>
      )}
      
      {!error && helperText && (
        <span id={`${inputId}-helper`} className="input__helper">
          {helperText}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;