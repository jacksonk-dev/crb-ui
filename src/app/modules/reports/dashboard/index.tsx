import links from 'src/app/modules/reports/links';
import Dashboard from 'src/app/shared/components/dashboard';

const ReportsDashboard = () => {
  return (<Dashboard title="Credit Reports" links={links} />);
};

export default ReportsDashboard;