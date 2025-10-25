import { useState, useCallback } from 'react';

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  return [
    value,
    useCallback(() => setValue(prev => !prev), []),
    useCallback(() => setValue(true), []),
    useCallback(() => setValue(false), [])
  ];
}

export default useToggle;