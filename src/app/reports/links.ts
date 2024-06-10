import { IoAdd as NewReportIcon } from 'react-icons/io5';
import { IoPersonOutline as MyReportsIcon } from 'react-icons/io5';
import { MdOutlineGroupAdd as BranchIcon } from 'react-icons/md';
import { VscOrganization as InstitutionIcon } from 'react-icons/vsc';

import { Link } from '../shared/modals/appConstants';

const links: Array<Link> = [
  {
    label: 'New Report',
    to: 'new',
    Icon: NewReportIcon
  },
  {
    label: 'My Reports',
    to: 'my-reports',
    Icon: MyReportsIcon
  },
  {
    label: 'Branch Reports',
    to: 'my-uploads',
    Icon: BranchIcon
  },
  {
    label: 'Institution Reports',
    to: 'all-uploads',
    Icon: InstitutionIcon
  }
];

export default links;