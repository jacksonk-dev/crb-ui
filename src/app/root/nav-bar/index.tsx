// import { IoLogInOutline as LoginIcon } from 'react-icons/io5';
import { useContext } from 'react';
import { CiUser as UserIcon } from 'react-icons/ci';
import { Link } from 'react-router-dom';

import { UserContext } from 'src/app/contexts/user';

const NavBar = () => {
  const user = useContext(UserContext);

  return (
    <div className="bg-white shadow p-6 w-full flex justify-between">
      <Link to="" className='text-black hover:text-black text-lg font-extrabold'>CRB</Link>
      <div>
        {
          user && (
            <div>
              <UserIcon className='text-2xl' />
            </div>
          )
        }
      </div>
    </div>
  );
  
};

export default NavBar;