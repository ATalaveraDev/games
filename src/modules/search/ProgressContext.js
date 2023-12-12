import { createContext, useState } from 'react';

export const ProgressContext = createContext({
  resume: '',
  showResume: () => {},
  hideResume: () => {},
});

export default function ProgressContextProvider({ children }) {
  const [resume, setResume] = useState(false);

  function showResume() {
    setResume(true);
  }

  function hideResume() {
    setResume(false);
  }

  const progressCtx = {
    resume,
    showResume,
    hideResume,
  };

  return (
    <ProgressContext.Provider value={progressCtx}>
      {children}
    </ProgressContext.Provider>
  );
}
