const API_KEY = process.env.API_KEY;

const Requests = {
  fetchLanguages: `/configuation/languages?api_key=${API_KEY}`,
  fetchconfig: `/configuation?api_key=${API_KEY}`,
  fetchCountries: `/configuation/countries?api_key=${API_KEY}`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genre=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genre=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genre=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genre=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genre=99`,
};

export default Requests;
