import links from 'src/app/reports/links';
import Dashboard from 'src/app/shared/components/dashboard';
import SideBar from 'src/app/shared/components/sidebar';

const Reports = () => (
  <div className='flex justify-between w-full h-full items-center'>
    <SideBar links={links} />
    <Dashboard title="Credit Reports" links={links} />
  </div>
);

export default Reports;