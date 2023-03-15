interface IFoodBasicReportProps {
  foodReportData: IFood;
  favorites: IFavorites;
  onFavoriteToggle: (id: string) => void;
}
