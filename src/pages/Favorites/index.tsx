import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import {
  Grid,
  GridColumn,
  GridRowClickEvent
} from '@progress/kendo-react-grid';

import LoaderComponent from 'components/Loader';
import { getFoodsByFdcIds } from 'api/foods/routes';
import useFavorites from 'hooks/useFavorites';
import { FOOD_REPORT } from 'constants/paths';

import './favorites.css';

const Favorites: React.FC = () => {
  const { favorites } = useFavorites();
  const favoritesList: number[] = React.useMemo(
    () => Object.keys(favorites).map((f) => +f),
    [favorites]
  );
  const navigate = useNavigate();

  const queryKeyData: TGetFoodsByFdcIdsQueryKey = [
    'foodsList',
    {
      fdcIds: favoritesList
    }
  ];

  const foodsListQuery = useQuery<
    IFood[],
    Error,
    IFood[],
    TGetFoodsByFdcIdsQueryKey
  >(queryKeyData, getFoodsByFdcIds, {
    retry: false,
    refetchOnWindowFocus: false
  });

  const rowClick = (event: GridRowClickEvent) => {
    navigate(FOOD_REPORT.replace(':fdcId', event.dataItem.fdcId));
  };

  return (
    <div className="favorites-container">
      <LoaderComponent isLoading={foodsListQuery.isLoading} />

      {!foodsListQuery.isLoading && foodsListQuery.data && (
        <div>
          <div>
            <h2>Favorite Foods List</h2>
          </div>
          <Grid
            className="food-list-table"
            data={favoritesList.length ? foodsListQuery.data : []}
            onRowClick={rowClick}
          >
            <GridColumn width={300} field="ndbNumber" title="ndbNumber" />
            <GridColumn width={550} field="description" title="Description" />
            <GridColumn
              width={300}
              field="publicationDate"
              title="Publication Date"
            />
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Favorites;
