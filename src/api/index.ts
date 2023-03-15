const VITE_FOOD_DATA_CENTRAL_API_BASE_URL = import.meta.env
  .VITE_FOOD_DATA_CENTRAL_API_BASE_URL;
const VITE_FOOD_DATA_CENTRAL_API_KEY = import.meta.env
  .VITE_FOOD_DATA_CENTRAL_API_KEY;

export const fdcRequest = (
  urlPath: string,
  params: IFdcRequestParams = {},
  init?: RequestInit
) => {
  return fetch(
    `${VITE_FOOD_DATA_CENTRAL_API_BASE_URL}${urlPath}?${new URLSearchParams({
      ...params,
      api_key: VITE_FOOD_DATA_CENTRAL_API_KEY
    })}`,
    init
  );
};
