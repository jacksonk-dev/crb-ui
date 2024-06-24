import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { CRBContext } from 'src/app/core/contexts/crb';
import { UserContext } from 'src/app/core/contexts/user';
import { getActiveCRB, setActiveCRB } from 'src/app/core/services/app';
import { useActiveAuthentication } from 'src/app/core/services/user';
import Footer from 'src/app/shared/components/footer';
import NavBar from 'src/app/shared/components/nav-bar';
import { METROPOL } from 'src/app/shared/constants/crb';



const nonAuthRoutes: {[key: string]: boolean} = { 
  '/login': true, 
  '/reset-password': true ,
  '/request-password-reset': true 
};

export default function Root(){
  const [crb, setCRB] = useState(getActiveCRB() || METROPOL);
  const { user } = useActiveAuthentication(crb);  
  const location = useLocation();
  const navigate = useNavigate();

  function setAndPersistCRB(crb: string) {
    setCRB(crb);
    setActiveCRB(crb);
  }  
  
  useEffect(() => {
    if(!user && !nonAuthRoutes[location.pathname]) {      
      navigate('/login');
    }
    
    if(user && nonAuthRoutes[location.pathname]) {      
      navigate('/');
    }
    
  }, [location.pathname, navigate, user]);

  return (
    <CRBContext.Provider value={{ crb, setCRB: setAndPersistCRB }}>
      <UserContext.Provider value={user}>
        <div className="w-svw h-svh flex flex-col items-center justify-between">
          <NavBar />
          <div className='p-4 h-full w-full'>
            <Outlet />
          </div>
          <Footer />
        </div>
      </UserContext.Provider>
    </CRBContext.Provider>
  );
}