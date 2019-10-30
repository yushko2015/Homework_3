import React, { useState, useEffect } from "react";
import MoviesList from "./MoviesList";
import DataProvider from "./DataProvider";
import Loader from "./Loader";
import Pagination from "./Pagination";
import ToggleButton from "./ToggleButton";
import { useMoviesHook } from "./useMoviesHook";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [sort, setSort] = useState(false);
  // const { movies, onSort } = useMoviesHook();

  useEffect(() => {
    DataProvider.getTvShows(page, false).then(data => {
      setLoading(false);
      setMovies(data.results);
      setTotal(data.total_pages);
    });
  }, []);

  const onSortChange = sort => {
    DataProvider.getTvShows(page, sort).then(data => {
      setLoading(false);
      setSort(sort);
      setTotal(data.total_pages);
      setMovies(data.results);
    });
  };

  const onPageChange = page => {
    DataProvider.getTvShows(page, sort).then(data => {
      setLoading(false);
      setPage(page);
      setTotal(data.total_pages);
      setMovies(data.results);
    });
  };

  return (
    <div className="App">
      <ToggleButton {...{ onSortChange }} />
      <Loader {...{ loading }} />
      <MoviesList {...{ movies }} />
      <Pagination {...{ onPageChange }} page={page} total={total} />
    </div>
  );
};

export default App;
