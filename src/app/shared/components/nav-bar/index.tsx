// import { IoLogInOutline as LoginIcon } from 'react-icons/io5';
import { Button, Dropdown, MenuProps, Select } from 'antd';
import { useContext } from 'react';
import { CiUser as UserIcon } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';

import { CRBContext } from 'src/app/core/contexts/crb';
import { UserContext } from 'src/app/core/contexts/user';
import { logUserOut } from 'src/app/core/services/user';
import crbOptions from 'src/app/shared/components/nav-bar/crbOptions';
import { stringCapitalizer } from 'src/app/shared/utils/string';

const NavBar = () => {
  const user = useContext(UserContext);
  const crbContext = useContext(CRBContext);
  const navigate = useNavigate();

  const logout = () => {
    if(crbContext?.crb) {
      logUserOut(crbContext?.crb).then(() => navigate(''));
    }
  };

  const dropdownItems: MenuProps['items'] = [
    {
      key: 'item-1',
      label: (
        <Button type='text' className='w-full' onClick={() => logout()}>
          Logout
        </Button>
      ),
    }
  ];

  return (
    <div className="bg-white shadow p-6 w-full flex justify-between">
      <Link to="" className='text-black hover:text-black text-lg font-extrabold'>Home</Link>
      <div className='w-fit flex items-center'>
        <Select value={crbContext?.crb} onChange={(v) => crbContext?.setCRB(v)} className='w-[150px] mr-2'>
          {
            crbOptions.map(({ name, fullName }) => (
              <Select.Option key={name} value={name}>{fullName}</Select.Option>
            ))
          }
        </Select>
        {
          user && (
            <Dropdown menu={{ items: dropdownItems }} placement="bottomRight">
              <Button className='flex items-center'>
                <UserIcon className='text-2xl' />
                <span>{stringCapitalizer(user?.first_name)}</span>
              </Button>
            </Dropdown>
          )
        }
      </div>
    </div>
  );
  
};

export default NavBar;