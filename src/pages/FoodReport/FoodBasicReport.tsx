import * as React from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { GridLayout, GridLayoutItem } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';

const FoodBasicReport: React.FC<IFoodBasicReportProps> = ({
  foodReportData,
  favorites,
  onFavoriteToggle
}) => {
  return (
    <GridLayout
      className="food-report-grid-layout"
      gap={{ rows: 6, cols: 10 }}
      rows={[{ height: 20 }, { height: 100 }, { height: 20 }]}
      cols={[
        { width: 284.5 },
        { width: 284.5 },
        { width: 284.5 },
        { width: 284.5 }
      ]}
    >
      <GridLayoutItem row={1} col={1} colSpan={3}>
        <div className="k-text-uppercase k-font-weight-bold">
          Basic Information
        </div>
      </GridLayoutItem>
      <GridLayoutItem row={2} col={1} colSpan={2}>
        <div className="article k-d-flex">
          {foodReportData.foodCategory?.code && (
            <div className="article-position k-d-inline-flex k-text-primary k-font-weight-bold">
              {foodReportData.foodCategory.code}
            </div>
          )}
          <div className="article-description k-d-flex-col">
            <div className="food-class">
              {foodReportData.scientificName}{' '}
              {foodReportData.foodClass
                ? `(${foodReportData.foodClass})`
                : null}
            </div>
            <div
              className="description k-font-weight-bold"
              title={foodReportData.description}
            >
              {foodReportData.description}
            </div>
            <div className="date k-d-flex">
              <div>{foodReportData.publicationDate}</div>
            </div>
          </div>
        </div>
      </GridLayoutItem>
      <GridLayoutItem
        row={2}
        col={3}
        colSpan={2}
        className="favorite-button-wrapper"
      >
        <Button
          themeColor={'primary'}
          icon={favorites[foodReportData.fdcId] ? 'heart' : undefined}
          onClick={() => onFavoriteToggle(foodReportData.fdcId.toString())}
          className="favorite-button"
        >
          {favorites[foodReportData?.fdcId]
            ? 'Added to favorites'
            : 'Add to favorites'}
        </Button>
      </GridLayoutItem>
      <GridLayoutItem row={3} col={1} colSpan={2}>
        <div className="k-text-uppercase k-font-weight-bold">Nutrients</div>
      </GridLayoutItem>
      <GridLayoutItem row={4} col={1} colSpan={4}>
        <Grid className="food-report-table" data={foodReportData.foodNutrients}>
          <GridColumn field="nutrient.name" title="Name" />
          <GridColumn field="amount" title="Amount" />
          <GridColumn field="nutrient.unitName" title="Unit" />
        </Grid>
      </GridLayoutItem>
    </GridLayout>
  );
};

export default FoodBasicReport;
