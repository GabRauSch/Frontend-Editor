// ElementContext.js
import { ReactElement, createContext, useContext, useState } from 'react';

interface ElementContextType {
  elementObject: HTMLElement | null;
  setElementObject: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

const ElementContext = createContext<ElementContextType | null>(null);

export function useElementContext() {
  const context = useContext(ElementContext);
  if (!context) {
    throw new Error('useElementContext must be used within an ElementProvider');
  }
  return context;
}

type Props = {
    children: React.ReactNode
}

export function ElementProvider({ children }: Props) {
  const [elementObject, setElementObject] = useState<HTMLElement | null>(null);

  return (
    <ElementContext.Provider value={{ elementObject, setElementObject }}>
      {children}
    </ElementContext.Provider>
  );
}
