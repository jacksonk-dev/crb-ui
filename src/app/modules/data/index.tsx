import links from 'src/app/modules/data/links';
import Dashboard from 'src/app/shared/components/dashboard';
import SideBar from 'src/app/shared/components/sidebar';

const Data = () => (
  <div className='flex justify-between w-full h-full items-center'>
    <SideBar links={links} />
    <Dashboard title="Data" links={links} />
  </div>
);

export default Data;