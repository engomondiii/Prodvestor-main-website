/**
 * PRODVESTOR WEBSITE - TEXTAREA COMPONENT
 * FILE LOCATION: src/components/common/TextArea/TextArea.js
 */

import React, { forwardRef } from 'react';
import './TextArea.css';

const TextArea = forwardRef(({
  label,
  name,
  id,
  value,
  placeholder,
  rows = 4,
  error,
  helperText,
  required = false,
  disabled = false,
  fullWidth = false,
  resize = 'vertical',
  maxLength,
  showCount = false,
  onChange,
  onBlur,
  onFocus,
  className = '',
  ...props
}, ref) => {
  const textareaId = id || name;
  
  const classes = [
    'textarea-wrapper',
    fullWidth && 'textarea-wrapper--full-width',
    error && 'textarea-wrapper--error',
    disabled && 'textarea-wrapper--disabled',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const textareaClasses = [
    'textarea',
    `textarea--resize-${resize}`
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {label && (
        <label htmlFor={textareaId} className="textarea__label">
          {label}
          {required && <span className="textarea__required">*</span>}
        </label>
      )}
      
      <textarea
        ref={ref}
        id={textareaId}
        name={name}
        value={value}
        placeholder={placeholder}
        rows={rows}
        required={required}
        disabled={disabled}
        maxLength={maxLength}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={textareaClasses}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={
          error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined
        }
        {...props}
      />

      {showCount && maxLength && (
        <div className="textarea__count">
          {value?.length || 0} / {maxLength}
        </div>
      )}

      {error && (
        <span id={`${textareaId}-error`} className="textarea__error" role="alert">
          {error}
        </span>
      )}
      
      {!error && helperText && (
        <span id={`${textareaId}-helper`} className="textarea__helper">
          {helperText}
        </span>
      )}
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;