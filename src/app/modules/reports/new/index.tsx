import { useActiveCRB } from 'src/app/core/services/app';
import { useActiveAuthentication } from 'src/app/core/services/user';
import SelectReportType from 'src/app/modules/reports/new/select-type';

const NewReport = () => {

  const crb = useActiveCRB();
  const { user } = useActiveAuthentication(crb);  
  
  return (
    <div className='h-full w-full'>
      <SelectReportType reportTypes={user?.user_reports || []} />
    </div>
  );
};

export default NewReport;