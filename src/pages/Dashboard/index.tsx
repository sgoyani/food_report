import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import {
  GridPageChangeEvent,
  GridRowClickEvent
} from '@progress/kendo-react-grid';
import { InputChangeEvent } from '@progress/kendo-react-inputs';

import FoodListTable from './FoodListTable';
import LoaderComponent from 'components/Loader';
import { getFoodsList } from 'api/foods/routes';
import useFavorites from 'hooks/useFavorites';
import { FOOD_REPORT } from 'constants/paths';

import './dashboard.css';

const initialDataState = {
  skip: 0,
  take: 20,
  query: ''
};

const searchDebounceWait = 1000;

const Dashboard: React.FC = () => {
  const [page, setPage] = React.useState<IPage>(initialDataState);
  const { favorites, onFavoriteToggle } = useFavorites();
  const navigate = useNavigate();

  let searchTimeout: NodeJS.Timeout;

  const foodsListQuery = useQuery<
    IGetFoodsSearchResponse,
    Error,
    IGetFoodsSearchResponse,
    TGetFoodsSearchQueryKey
  >(['foodsList', page], getFoodsList, {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  const queryChange = (query: string) => {
    setPage((val) => ({ ...val, query }));
  };

  const handleSearchInputChange = React.useCallback(
    (event: InputChangeEvent): void => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        if (event.target.value !== undefined) {
          queryChange(event.target.value.toString());
        }
      }, searchDebounceWait);
    },
    []
  );

  const pageChange = (event: GridPageChangeEvent) => {
    setPage((val) => ({ ...val, ...event.page }));
  };

  const rowClick = (event: GridRowClickEvent) => {
    navigate(FOOD_REPORT.replace(':fdcId', event.dataItem.fdcId));
  };

  return (
    <div className="dashboard-container">
      <LoaderComponent isLoading={foodsListQuery.isLoading} />

      {!foodsListQuery.isLoading && foodsListQuery.data && (
        <div>
          <div>
            <h2>Foods List</h2>
          </div>
          <FoodListTable
            foodListData={foodsListQuery.data}
            isFetching={foodsListQuery.isFetching}
            page={page}
            pageChange={pageChange}
            rowClick={rowClick}
            favorites={favorites}
            onFavoriteToggle={onFavoriteToggle}
            handleSearchInputChange={handleSearchInputChange}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
