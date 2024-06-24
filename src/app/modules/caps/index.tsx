import links from 'src/app/modules/caps/links';
import Dashboard from 'src/app/shared/components/dashboard';
import SideBar from 'src/app/shared/components/sidebar';

const Caps = () => {
  return (
    <div className='flex justify-between w-full h-full items-center'>
      <SideBar links={links} />
      <Dashboard title="Credit Applications" links={links} />
    </div>
  );
};

export default Caps;