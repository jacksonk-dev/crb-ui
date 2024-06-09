import { Link } from 'react-router-dom';

import links from 'src/app/home/links';

const Home = () => {
  return (
    <div className='grid grid-cols-2 gap-4 w-full md:w-[50%]'>
      {
        links.map(({label, to, Icon}, i) => {
          const reactKey = `home-link-${i}`;

          return (
            <Link 
              to={to}
              key={reactKey} 
              className='
                bg-white text-black hover:text-black 
                flex flex-col justify-center items-center 
                border h-48 p-4 rounded shadow-sm 
                font-light hover:font-extrabold 
                transition-all
                parent group
              '
            >
              <div 
                className='
                  mb-4 p-4
                  bg-[#FAFAFA] 
                  flex justify-center items-center 
                  rounded-full border 
                  child group-hover:border-black
                '
              >
                <Icon 
                  className='
                    text-3xl child group-hover:text-4xl
                    transition ease-in-out duration-500
                  '
                />
              </div>
              <span>{label}</span>
            </Link>
          );
        })
      }
    </div>
  );
};

export default Home;