import { createContext } from 'react';

export const CRBContext = createContext<{crb: string, setCRB: (crb: string) => void } | null>(null);