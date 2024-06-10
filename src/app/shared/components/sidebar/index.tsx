import { Link } from 'react-router-dom';

import { Link as AppLink } from 'src/app/shared/modals/appConstants';

const SideBar = ({ links }: { links: Array<AppLink>, title?: string }) => {
  return (
    <div className='w-fit h-full md:min-w-48 animate-zoom'>
      <div className='flex flex-col bg-white h-full py-2 rounded shadow'>
        {
          links.map(({label, to, Icon}, i) => {
            const reactKey = `home-link-${i}`;

            return (
              <Link 
                to={to}
                key={reactKey} 
                className='
                  text-sm
                  bg-white hover:bg-blue-700
                  text-black hover:text-white
                  flex justify-start items-center text-center
                  font-light hover:font-extrabold 
                  p-4 text-nowrap
                '
              >
                <Icon 
                  className='
                      text-lg child group-hover:text-4xl
                      transition ease-in-out duration-500
                      mr-2
                    '
                />
                <span>{label}</span>
              </Link>
            );
          })
        }
      </div>
    </div>
  );
};

export default SideBar;