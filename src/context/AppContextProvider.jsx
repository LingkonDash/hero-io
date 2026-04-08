import React, { useState } from 'react';
import { AppContext } from './AppContext';


const AppContextProvider = ({ children }) => {

  const [installedApp, setInstalledApp] = useState([]);

  return (
    <AppContext.Provider value={[installedApp, setInstalledApp]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;