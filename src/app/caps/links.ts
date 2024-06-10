import { AiOutlineProfile as AllIcon } from 'react-icons/ai';
import { IoMdCheckmarkCircleOutline as ApprovedIcon } from 'react-icons/io';
import { IoAdd as NewReportIcon } from 'react-icons/io5';
import { 
  MdOutlinePending as PendingIcon,
  MdOutlineCancel as RejectedIcon 
} from 'react-icons/md';


import { Link } from '../shared/modals/appConstants';

const links: Array<Link> = [
  {
    label: 'Create New',
    to: 'new',
    Icon: NewReportIcon
  },
  {
    label: 'Pending',
    to: 'pending',
    Icon: PendingIcon,
    color: '#FFA000'
  },
  {
    label: 'Approved',
    to: 'approved',
    Icon: ApprovedIcon,
    color: '#388E3C'
  },
  {
    label: 'Rejected',
    to: 'rejected',
    Icon: RejectedIcon,
    color: '#D32F2F'
  },
  {
    label: 'All CAPs',
    to: 'all',
    Icon: AllIcon
  },
];

export default links;