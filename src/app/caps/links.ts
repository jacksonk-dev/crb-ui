import { AiOutlineProfile as AllIcon } from 'react-icons/ai';
import { 
  MdCheckCircle as ApprovedIcon, 
  MdPending as PendingIcon,
  MdCancel as RejectedIcon 
} from 'react-icons/md';

import { Link } from '../shared/modals/appConstants';

const links: Array<Link> = [
  {
    label: 'All',
    to: 'all',
    Icon: AllIcon
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
  }
];

export default links;