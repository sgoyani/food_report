import { useCallback, useEffect, useState } from 'react';

import { LOCAL_STORAGE_FAVORITES } from '../constants/codes';

const useFavorites = () => {
  const [favorites, setFavorites] = useState<IFavorites>(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_FAVORITES) || '{}')
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_FAVORITES, JSON.stringify(favorites));
  }, [favorites]);

  const onFavoriteToggle = useCallback(
    (id: string) => {
      const values = { ...favorites };
      if (values[id]) {
        delete values[id];
      } else {
        values[id] = true;
      }

      setFavorites(values);
    },
    [favorites]
  );

  return {
    favorites,
    onFavoriteToggle
  };
};

export default useFavorites;
