import { useState, useLayoutEffect, useCallback } from 'react';

const queries = [
  '(max-width: 766px)',
  '(min-width: 767px) and (max-width: 1199px)',
  '(min-width: 1200px)',
];

export const useMatchMedia = () => {
  const mediaQueryLists = queries.map(query => matchMedia(query));

  const getValues = useCallback(() => {
    return mediaQueryLists.map(list => list.matches);
  }, [mediaQueryLists]);

  const [values, setValues] = useState(getValues());

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryLists.forEach(list => list.addEventListener('change', handler));

    return () =>
      mediaQueryLists.forEach(list =>
        list.removeEventListener('change', handler)
      );
  }, [getValues, mediaQueryLists]);

  return ['isMobile', 'isTablet', 'isDesktop'].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {}
  );
};
