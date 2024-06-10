import { Link } from 'react-router-dom';

import { Link as AppLink } from 'src/app/shared/modals/appConstants';

const Dashboard = ({ title, links }: { links: Array<AppLink>, title?: string }) => {
  return (
    <div className='w-full md:w-[50%] animate-zoom'>
      {
        title &&
        <h3 className='mb-4 text-xl'>{title}</h3>
      }
      <div className='grid grid-cols-2 gap-2 md:gap-4'>
        {
          links.map(({label, to, Icon, color}, i) => {
            const reactKey = `home-link-${i}`;

            return (
              <Link 
                to={to}
                key={reactKey} 
                className='
                  bg-white text-blue-700
                  flex flex-col justify-center items-center text-center
                  border h-48 p-4 rounded shadow-sm 
                  font-light hover:font-extrabold 
                  transition-all
                  parent group
                '
              >
                <div 
                  className={`
                    mb-4 p-4
                    w-16 h-16
                    bg-[#FAFAFA] 
                    flex justify-center items-center 
                    rounded-full border
                    child group-hover:border-blue-700
                  `}
                >
                  <Icon 
                    className='
                      text-3xl child group-hover:text-4xl
                      transition ease-in-out duration-500
                    '
                    color={color ?? '1976D2'}
                  />
                </div>
                <span>{label}</span>
              </Link>
            );
          })
        }
      </div>
    </div>
  );
};

export default Dashboard;