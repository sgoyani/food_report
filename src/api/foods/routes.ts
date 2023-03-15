import { QueryFunction } from 'react-query';

import { fdcRequest } from '..';

export const V1_FOOD_BY_FDC_ID = '/v1/food';
export const V1_FOODS_BY_FDC_IDS = '/v1/foods';
export const V1_FOODS_SEARCH = '/v1/foods/search';

export const getFoodsByFdcIds: QueryFunction<
  IFood[],
  TGetFoodsByFdcIdsQueryKey
> = async ({ queryKey }) => {
  const [, { fdcIds }] = queryKey;
  const body: IGetFoodsByFdcIdsRequestBody = {
    fdcIds
  };
  const res = await fdcRequest(
    V1_FOODS_BY_FDC_IDS,
    {},
    {
      method: 'post',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  );
  return res.json();
};

export const getFoodsList: QueryFunction<
  IGetFoodsSearchResponse,
  TGetFoodsSearchQueryKey
> = async ({ queryKey }) => {
  const [, { skip, take, query }] = queryKey;
  const res = await fdcRequest(V1_FOODS_SEARCH, {
    pageSize: take.toString(),
    pageNumber: ((skip + take) / take).toString(),
    query: query || ''
  });
  return res.json();
};

export const getFoodByFdcId: QueryFunction<
  IGetFoodByFdcIdResponse,
  TGetFoodByFdcIQueryKey
> = async ({ queryKey }) => {
  const [, { fdcId }] = queryKey;
  const res = await fdcRequest(`${V1_FOOD_BY_FDC_ID}/${fdcId}`);
  return res.json();
};
