import { useState, useEffect } from 'react';

const STORAGE_KEY = 'tk_prompt_unlocked';
const EXPIRY_DAYS = 30;

function readStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    const age = Date.now() - data.unlockedAt;
    if (age > EXPIRY_DAYS * 24 * 60 * 60 * 1000) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

const FORCE_LOCKED = import.meta.env.DEV;

export function useEmailGate() {
  const [isUnlocked, setIsUnlocked] = useState(() => FORCE_LOCKED ? false : readStorage() !== null);

  useEffect(() => {
    if (!FORCE_LOCKED) setIsUnlocked(readStorage() !== null);
  }, []);

  function unlock(email) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, unlockedAt: Date.now() }));
    setIsUnlocked(true);
  }

  function reset() {
    localStorage.removeItem(STORAGE_KEY);
    setIsUnlocked(false);
  }

  return { isUnlocked, unlock, reset };
}
