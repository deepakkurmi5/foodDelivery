import React, {createContext, useMemo, useContext, useState} from 'react';
import type {FC, ReactNode} from 'react';

type ContextProps = {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
};

const Context = createContext<ContextProps | undefined>(undefined);

export const TabProvider: FC<{children: ReactNode}> = ({children}) => {
  const [selectedTab, setSelectedTab] = useState('');

  const contextValue = useMemo(
    () => ({
      selectedTab,
      setSelectedTab,
    }),
    [selectedTab, setSelectedTab],
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default function useTab() {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('Tab context require');
  }
  return context;
}
