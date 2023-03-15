import * as React from 'react';
import {
  Grid,
  GridCellProps,
  GridColumn,
  GridToolbar
} from '@progress/kendo-react-grid';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const FoodListTable: React.FC<IFoodsListTableProps> = ({
  foodListData,
  isFetching,
  page,
  pageChange,
  rowClick,
  favorites,
  onFavoriteToggle,
  handleSearchInputChange
}) => {
  const ActionGridCell = (data: GridCellProps) => (
    <td>
      <Button
        themeColor={'primary'}
        icon={favorites[data.dataItem.fdcId] ? 'heart' : undefined}
        onClick={() => onFavoriteToggle(data.dataItem.fdcId)}
        className="favorite-button"
      >
        {favorites[data.dataItem.fdcId]
          ? 'Added to favorites'
          : 'Add to favorites'}
      </Button>
    </td>
  );

  return (
    <div>
      <Grid
        className="food-list-table"
        data={foodListData.foods}
        skip={page.skip}
        take={page.take}
        total={foodListData.totalHits}
        pageable={{ buttonCount: 3 }}
        onPageChange={pageChange}
        onRowClick={rowClick}
      >
        <GridToolbar>
          <Input
            placeholder="Search"
            type="text"
            className="search-input"
            onChange={handleSearchInputChange}
          />
          <p className="loading-text">
            {isFetching ? 'Loading...' : <span>&nbsp;</span>}
          </p>
        </GridToolbar>

        <GridColumn width={200} field="ndbNumber" title="ndbNumber" />
        <GridColumn width={550} field="description" title="Description" />
        <GridColumn
          width={200}
          field="publishedDate"
          title="Publication Date"
        />
        <GridColumn width={200} title="Action" cell={ActionGridCell} />
      </Grid>
    </div>
  );
};

export default FoodListTable;
