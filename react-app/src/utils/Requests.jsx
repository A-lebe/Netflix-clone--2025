const API_KEY = import.meta.env.VITE_API_KEY 
const Requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en_us`,
    fetchNetflixOrigionals: `/movie/top_rated?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en_us`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with geners=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with geners=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with geners=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with geners=10749`,
    fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with geners=99`,
    fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en_us`

};
export default Requests;