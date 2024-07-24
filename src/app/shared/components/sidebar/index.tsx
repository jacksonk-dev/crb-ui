import { NavLink } from 'react-router-dom';

import { AppLink } from 'src/app/shared/types/app';

const SideBar = ({ links }: { links: Array<AppLink>, title?: string }) => {
  return (
    <div className='w-fit h-full md:min-w-48 animate-zoom'>
      <div className='flex flex-col bg-white h-full py-2 rounded shadow'>
        {
          links.map(({ label, to, Icon }, i) => {
            const reactKey = `home-link-${i}`;

            return (
              <NavLink 
                to={to}
                key={reactKey} 
                className={({ isActive }) => `
                  text-sm
                  ${isActive ? 'bg-blue-700': 'bg-white'} hover:bg-blue-700
                  ${isActive ? 'text-white': 'text-black'} hover:text-white
                  flex justify-start items-center text-center
                  font-light hover:font-extrabold 
                  p-4 text-nowrap
                `}
              >
                {
                  Icon &&
                  (
                    <Icon 
                      className='
                        text-lg child group-hover:text-4xl
                        transition ease-in-out duration-500
                        mr-2
                      '
                    />
                  )
                }
                <span>{label}</span>
              </NavLink>
            );
          })
        }
      </div>
    </div>
  );
};

export default SideBar;