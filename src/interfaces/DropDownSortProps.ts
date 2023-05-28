export interface DropDownSortProps {
  toggle: boolean;
  sortBy: string;
  onSortByChange: (query: string) => void;
  orderBy: string;
  onOrderByChange: (query: string) => void;
}
