interface IFdcRequestParams {
  [key: string]: string;
}

interface IFoodNutrient {
  number: number;
  name: string;
  amount: number;
  unitName: string;
  derivationCode: string;
  derivationDescription: string;
}

interface IFood {
  fdcId: number;
  dataType: string;
  description: string;
  foodCode: string;
  foodClass: string;
  foodNutrients: IFoodNutrient[];
  publicationDate: string;
  scientificName: string;
  brandOwner: string;
  gtinUpc: string;
  ingredients: string;
  ndbNumber: number;
  additionalDescriptions: string;
  allHighlightFields: string;
  score: number;
  foodCategory: {
    code: string;
  };
}

interface IPage {
  /**
   * The number of records that will be skipped.
   */
  skip: number;
  /**
   * The number of records that will be taken.
   */
  take: number;
  /**
   * The searched query.
   */
  query: string;
}

interface IGetFoodsListRequest {
  queryKey: [string, IPage];
}

type TGetFoodsSearchQueryKey = [string, IPage];

interface IGetFoodsSearchResponse {
  totalHits: number;
  currentPage: number;
  totalPages: number;
  foods: IFood[];
}

type TGetFoodsByFdcIdsQueryKey = [string, { fdcIds: number[] }];

interface IGetFoodsByFdcIdsRequestBody {
  fdcIds: number[];
}

interface IGetFoodByFdcIQueryKeyData {
  fdcId: string;
}

type TGetFoodByFdcIQueryKey = [string, IGetFoodByFdcIQueryKeyData];

type IGetFoodByFdcIdResponse = IFood;
