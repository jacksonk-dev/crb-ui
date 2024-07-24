import { Partner } from 'src/app/shared/types/partner';
import { PartnerBranch } from 'src/app/shared/types/partner-branch';
import { PartnerReport } from 'src/app/shared/types/partner-report';

export type User = {
  first_name: string,
  last_name: string,
  email_address: string,
  authorities?: Array<string>,
  username?: string;
  is_staff?: boolean;
  is_enabled?: boolean;
  reset_password?: boolean;
  password_expiry_date?: string;
  last_login_date?: string;
  roles?: Array<UserRole>;
  user_reports?: Array<PartnerReport>;
  partner?: Partner;
  partner_branch?: PartnerBranch;
  user_type?: number;
}


export interface UserRole{
  description: string;
  name?: string;
  role_code?: string;
}