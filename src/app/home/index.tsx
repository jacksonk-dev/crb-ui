import links from 'src/app/home/links';
import Dashboard from 'src/app/shared/components/dashboard';

const Home = () => {
  return (
    <div className='flex justify-between w-full h-full items-center'>
      <Dashboard title="Service" links={links} />
    </div>
  );
};

export default Home;