import { Button } from 'antd';

import { PartnerReport } from 'src/app/shared/types/partner-report';
import { stringCapitalizer } from 'src/app/shared/utils/string';

const SelectReportType = ({ reportTypes }: { reportTypes: Array<PartnerReport>}) => {
  
  return (
    <div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2'>
        {
          reportTypes.map(reportType => {
            return (
              <Button className='py-6 flex items-center text-blue-700'>
                {stringCapitalizer(reportType.report_type_name)}
              </Button>
            );
          })
        }
      </div>
    </div>
  );
};

export default SelectReportType;