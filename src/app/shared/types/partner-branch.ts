export interface PartnerBranch {
  created_at?: string;
  is_active?: boolean;
  branch_name?: string;
  branch_code?: string;
  partner_id?: number;
  date_opened?: string;
  branch_type?: string,
  branch_address?: string;
  town?: string;
  district?: string;
}

export interface PartnerBranchPagination {
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  sort: PartnerBranchSort;
  number_of_elements: number;
  total_pages: number;
  total_elements: number;
}
  
export interface PartnerBranchSort {
  unsorted: boolean;
  sorted: boolean;
  empty: boolean;
}
