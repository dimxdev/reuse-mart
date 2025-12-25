import { createContext, useContext, useState } from "react";

const WindowContext = createContext();

export function WindowProvider({ children }) {
  const [refreshWindow, setRefreshWindow] = useState(0);
  const [showHiddenComponent, setShowHiddenComponent] = useState(false);

  const handleShowHiddenComponent = () => {
    setShowHiddenComponent(true);
  };

  const handleCloseHiddenComponent = () => {
    setShowHiddenComponent(false);
  };

  const handleRefreshWindow = () => {
    setRefreshWindow((prev) => prev + 1);
  };

  return (
    <WindowContext.Provider
      value={{
        refreshWindow,
        showHiddenComponent,
        handleShowHiddenComponent,
        handleCloseHiddenComponent,
        handleRefreshWindow,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useWindow = () => useContext(WindowContext);
