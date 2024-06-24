import { jwtDecode } from 'jwt-decode';

import { UserForm } from 'src/app/shared/types/form';
import { User } from 'src/app/shared/types/user';
import { postData } from 'src/app/shared/utils/http';


const API_URL = import.meta.env.VITE_API_URL;

export function logUserIn(credentials: UserForm) {  
  return postData(`${API_URL}/login`, credentials).then(data => {
    if(data?.access_token) {      
      localStorage.setItem('access-token', data?.access_token);
    }

    return data;
  });
}

export function requestPasswordReset(email: string) {
  return postData(`${API_URL}/users/forgot_password`, null, { email });
}

export function useAuthentication(): { user?: User | null, token?: string} {

  const token = localStorage.getItem('access-token');

  if(!token) return { user: null };

  const tokenDetails: { user: User, authorities: string[] } = jwtDecode(token);

  const user = tokenDetails.user;
  user.authorities = tokenDetails.authorities;
  
  return { user, token };
  
}