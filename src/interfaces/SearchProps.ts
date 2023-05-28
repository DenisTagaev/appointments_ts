export interface SearchProps {
  query: string;
  onQueryChange: (query: string) => void;
  sortBy: string;
  onSortByChange: (query: string) => void;
  orderBy: string;
  onOrderByChange: (query: string) => void;
}
