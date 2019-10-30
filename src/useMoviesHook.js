import { useReducer } from "react";

import { initialState, MOVIES_ACTIONS, moviesReducer } from "./moviesReducer";

export const useMoviesHook = () => {
  const [movies, dispatch] = useReducer(moviesReducer, initialState());

  const onSort = sort =>
    dispatch({
      sort,
      type: MOVIES_ACTIONS.LOAD
    });

  return {
    movies,
    onSort
  };
};
