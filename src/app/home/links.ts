import { IconType } from 'react-icons';
import { 
  AiOutlineMoneyCollect as CapIcon, 
  AiOutlineDatabase as DataIcon,
  AiOutlineProfile as ReportsIcon
} from 'react-icons/ai';
import { CiMoneyBill as BillingIcon } from 'react-icons/ci';

type Link = {
  label: string,
  to: string,
  Icon: IconType
}

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