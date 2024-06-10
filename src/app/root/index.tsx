import { Outlet } from 'react-router-dom';

import Footer from 'src/app/root/footer';
import NavBar from 'src/app/root/nav-bar';

export default function Root(){
  return (
    <div className="w-svw h-svh flex flex-col items-center justify-between">
      <NavBar />
      <div className='p-4 h-full w-full'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}