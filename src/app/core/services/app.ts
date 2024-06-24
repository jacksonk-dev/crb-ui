import { useContext } from 'react';

import { CRBContext } from 'src/app/core/contexts/crb';
import { METROPOL } from 'src/app/shared/constants/crb';

export const setActiveCRB = (crb: string) => {
  localStorage.setItem('active-crb', crb);
};

export const getActiveCRB = () => {
  return localStorage.getItem('active-crb');
};

export const useActiveCRB = () => {
  const crbContext = useContext(CRBContext);
  return crbContext?.crb || METROPOL;
};