import config from "./config";

class DataProvider {
  async getTvShows(page, sort) {
    const type = sort === true ? "top_rated" : "popular";
    return await fetch(
      `${config.base_url}tv/${type}?page=${page}&api_key=${config.api_key}`
    ).then(resp => {
      return resp.json();
    });
  }

  async getTvShowById(id) {
    return await fetch(
      `${config.base_url}tv/${id}?api_key=${config.api_key}`
    ).then(resp => {
      return resp.json();
    });
  }

  async getTvSeasonById(tvId, season) {
    return await fetch(
      `${config.base_url}tv/${tvId}/season/${season}?api_key=${config.api_key}`
    ).then(resp => {
      return resp.json();
    });
  }

  async getEpisodeById(tvId, season, episode) {
    return await fetch(
      `${
        config.base_url
      }tv/${tvId}/season/${season}/episode/${episode}?api_key=${config.api_key}`
    ).then(resp => {
      return resp.json();
    });
  }
}

export default new DataProvider();
