export type PagerInput = {
  page: number;
  size: number;
};

export type PagerOutput = {
  total_items: number;
  total_pages: number;
  current_page: number;
  page_size: number;
};
