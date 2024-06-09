import { 
  AiOutlineMoneyCollect as CapIcon, 
  AiOutlineDatabase as DataIcon,
  AiOutlineProfile as ReportsIcon
} from 'react-icons/ai';
import { CiMoneyBill as BillingIcon } from 'react-icons/ci';

import { Link } from 'src/app/shared/modals/appConstants';

const links: Array<Link> = [
  {
    label: 'Reports',
    to: 'reports',
    Icon: ReportsIcon
  },
  {
    label: 'Credit Applications',
    to: 'caps',
    Icon: CapIcon
  },
  {
    label: 'Data',
    to: 'data',
    Icon: DataIcon
  },
  {
    label: 'Billing',
    to: 'billing',
    Icon: BillingIcon
  }
];

export default links;