import DataProvider from "./DataProvider";

export const MOVIES_ACTIONS = {
  LOAD: "load",
  SORT_BY_RATE: "sort-by-rate"
};

export const initialState = async () => {
  const result = await DataProvider.getTvShows(1, false).result;

  return result;
};

export const moviesReducer = (movies, action) => {
  const { type, page, sort } = action;
  switch (type) {
    case MOVIES_ACTIONS.LOAD:
      DataProvider.getTvShows(page, sort).then(data => {
        return data.result || [];
      });
      break;
    default:
      throw new Error();
  }
};
