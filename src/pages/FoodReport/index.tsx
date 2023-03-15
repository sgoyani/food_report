import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import FoodBasicReport from './FoodBasicReport';
import LoaderComponent from 'components/Loader';
import useFavorites from 'hooks/useFavorites';
import { getFoodByFdcId } from 'api/foods/routes';

import './foodReport.css';

const FoodReport: React.FC = () => {
  const { fdcId } = useParams();
  const { favorites, onFavoriteToggle } = useFavorites();

  const foodReportQuery = useQuery<
    IGetFoodByFdcIdResponse,
    Error,
    IGetFoodByFdcIdResponse,
    TGetFoodByFdcIQueryKey
  >(['foodReport', { fdcId: fdcId ? fdcId.toString() : '' }], getFoodByFdcId, {
    retry: false,
    refetchOnWindowFocus: false
  });

  return (
    <div className="food-report-container">
      <LoaderComponent isLoading={foodReportQuery.isLoading} />

      {!foodReportQuery.isLoading &&
        (foodReportQuery.data?.fdcId ? (
          <div>
            <div>
              <h2>Food Report</h2>
            </div>
            <FoodBasicReport
              foodReportData={foodReportQuery.data}
              favorites={favorites}
              onFavoriteToggle={onFavoriteToggle}
            />
          </div>
        ) : (
          <div className="error-wrapper">
            <p>Food details not found.</p>
          </div>
        ))}
    </div>
  );
};

export default FoodReport;
