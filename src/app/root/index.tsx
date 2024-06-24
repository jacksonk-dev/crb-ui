import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { UserContext } from 'src/app/contexts/user';
import Footer from 'src/app/root/footer';
import NavBar from 'src/app/root/nav-bar';
import { useAuthentication } from 'src/app/shared/services/user';

const nonAuthRoutes: {[key: string]: boolean} = { 
  '/login': true, 
  '/reset-password': true ,
  '/request-password-reset': true 
};

export default function Root(){
  const { user } = useAuthentication();  
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!user && !nonAuthRoutes[location.pathname]) {      
      navigate('/login');
    }
  }, [location.pathname, navigate, user]);


  return (
    <UserContext.Provider value={user}>
      <div className="w-svw h-svh flex flex-col items-center justify-between">
        <NavBar />
        <div className='p-4 h-full w-full'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}