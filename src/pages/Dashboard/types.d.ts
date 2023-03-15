interface IFoodsListTableProps {
  foodListData: IGetFoodsSearchResponse;
  isFetching: boolean;
  page: IPage;
  pageChange: (event: GridPageChangeEvent) => void;
  rowClick: (event: GridRowClickEvent) => void;
  favorites: IFavorites;
  onFavoriteToggle: (id: string) => void;
  handleSearchInputChange: (event: InputChangeEvent) => void;
}
