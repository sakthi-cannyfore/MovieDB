import { Appdispatch, RootState } from "../Redux/store/Store";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../SkeletonLoader/Loader";
import { useParams } from "react-router-dom";
import { fetchPopularMoviesById } from "../Redux/features/FetchingPopularMovies";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const SearchResults = () => {
    const { movies,status } = useSelector((state:RootState) => state.searchMovies);
    const dispatch = useDispatch<Appdispatch>();
  const { movieId } = useParams<{ movieId: string }>();


  useEffect(() => {
    if (movieId) {
      dispatch(fetchPopularMoviesById(Number(movieId)));
    }
  }, [movieId, dispatch]);

  return (
    <>
    {status == "loading" ? (<Loader/>) :(
        <div className="movie-results grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 px-4 rounded-md ]">
        {movies.length > 0 ? (
          movies.map((movie:any,index) => (

            <Link to={`/movie/${movie.id}`} key={`${movie.id}-${index}`}>
            <div key={movie.id} className="movie-card p-2 bg-white rounded shadow">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto rounded"
              />
              <h2 className="text-sm font-semibold mt-2">{movie.title}</h2>
              <p className="text-xs text-gray-500">{movie.release_date}</p>
            </div>
            </Link>


          ))
        ) : (
          <p className="text-center col-span-full">No results found.</p>
        )}
      </div>
    )}
     
    </>
  )
}

export default SearchResults