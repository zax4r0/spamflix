// @ts-nocheck

const TMDB_API_KEY = process.env.TMDB_API_KEY

export default {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/day?api_key=${TMDB_API_KEY}&language=en-US&include_adult=true`,
  },
  fetchToprated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&include_adult=true`,
  },
  fetchActionMovies: {
    title: 'Action',
    url: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28&include_adult=true`,
  },
  fetchComedyActionMovies: {
    title: 'Comedy',
    url: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35&include_adult=true`,
  },
  fetchHorrorMovies: {
    title: 'Horror',
    url: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27&include_adult=true`,
  },
  fetchRomanceMovies: {
    title: 'Romance',
    url: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10770&include_adult=true`,
  },
  fetchMysteryMovies: {
    title: 'Mystery',
    url: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=9648&include_adult=true`,
  },
  fetchSciFIMovies: {
    title: 'Sci-FI',
    url: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=878&include_adult=true`,
  },
  fetchWesternMovies: {
    title: 'Western',
    url: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=37&include_adult=true`,
  },
  fetchAnimationMovies: {
    title: 'Animation',
    url: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=16&include_adult=true`,
  },
  fetchTv: {
    title: 'Tv Movie',
    url: `/tv/popular?api_key=${TMDB_API_KEY}&language=en-US&include_adult=true`,
  },
}
