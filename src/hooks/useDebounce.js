import { useCallback } from 'react';

export function useDebounce(fnToDebounce, deps) {
  function debounce(fn) {
    let timer;
    
    return function (...args) {
      const context = this;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        timer = null;
        fn.apply(context, args);
      }, 500);
    };
  }

  return useCallback(debounce(fnToDebounce), deps);
}