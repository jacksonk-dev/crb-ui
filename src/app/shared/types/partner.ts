import { PartnerModule } from 'src/app/shared/types/partner-module';
import { Role } from 'src/app/shared/types/role';

export interface Partner {
  created_at?: string;
  partner_name?: string;
  abbreviated_name?: string;
  bou_code?: string;
  mcrb_code?: string;
  shares_data?: boolean;
  is_active?: boolean;
  partner_type_id?: number;
  partner_type_name?: string;
  partner_type_code?: string;
  modules?: Array<PartnerModule>;
  roles?: Array<Role>
}

export interface PartnerPagination {
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  sort: PartnerSort;
  number_of_elements: number;
  total_pages: number;
  total_elements: number;
}
  
export interface PartnerSort {
  unsorted: boolean;
  sorted: boolean;
  empty: boolean;
}