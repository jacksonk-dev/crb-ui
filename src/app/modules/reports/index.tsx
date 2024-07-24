import { Outlet } from 'react-router-dom';

import links from 'src/app/modules/reports/links';
import SideBar from 'src/app/shared/components/sidebar';

const Reports = () => (
  <div className='flex justify-between w-full h-full items-center'>
    <SideBar links={links} />
    <div className='px-4 h-full w-full flex items-center justify-center'>
      <Outlet />
    </div>
  </div>
);

export default Reports;