import { useState, useCallback } from 'react';
import { validateField, validateForm } from '../utils/validation';

function useFormValidation(initialValues = {}, validationRules = {}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setValues(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) {
      setErrors(prev => { const newErrors = { ...prev }; delete newErrors[name]; return newErrors; });
    }
  }, [errors]);

  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    if (validationRules[name]) {
      const error = validateField(name, values[name], validationRules[name]);
      if (error) setErrors(prev => ({ ...prev, [name]: error }));
    }
  }, [values, validationRules]);

  const validate = useCallback(() => {
    const validationErrors = validateForm(values, validationRules);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  }, [values, validationRules]);

  const handleSubmit = useCallback((onSubmit) => async (e) => {
    if (e) e.preventDefault();
    setTouched(Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    if (validate()) {
      setIsSubmitting(true);
      try { await onSubmit(values); }
      catch (error) { console.error('Form submission error:', error); }
      finally { setIsSubmitting(false); }
    }
  }, [values, validate]);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  return { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit, validate, resetForm,
    setFieldValue: useCallback((name, value) => setValues(prev => ({ ...prev, [name]: value })), []),
    setFieldError: useCallback((name, error) => setErrors(prev => ({ ...prev, [name]: error })), [])
  };
}

export default useFormValidation;