import { createContext, useContext, useState } from 'react';
import { useEmailGate } from '../hooks/useEmailGate.js';

const GateContext = createContext(null);

export function GateProvider({ children }) {
  const { isUnlocked, unlock, reset } = useEmailGate();
  const [showModal, setShowModal] = useState(false);

  return (
    <GateContext.Provider value={{ isUnlocked, unlock, reset, showModal, setShowModal }}>
      {children}
    </GateContext.Provider>
  );
}

export function useGate() {
  return useContext(GateContext);
}
