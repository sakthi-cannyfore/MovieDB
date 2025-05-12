import loadingImage from "../../assets/not-ready.svg";
import { useDispatch, useSelector } from "react-redux";
import { Appdispatch, RootState } from "../Redux/store/Store";
import "../../index.css";
import NotFound from "../NotFound/NotFound";
import { useParams } from "react-router-dom";
import { fetchPopularMoviesById } from "../Redux/features/FetchingPopularMovies";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import People from "../People/People";

const SearchTest = () => {
  const { movies } = useSelector((state: RootState) => state.searchMovies);
  const dispatch = useDispatch<Appdispatch>();
  const { movieId } = useParams<{ movieId: string }>();

  useEffect(() => {
    if (movieId) {
      dispatch(fetchPopularMoviesById(Number(movieId)));
    }
  }, [movieId, dispatch]);

  return (
    <>
      {movies.length == 0 ? (
        <NotFound />
      ) : (
        <>
          <People />
          <div>
            <div className="ml-[5%]">
              <h1 className="font-bold my-5">Movies</h1>
            </div>

            {movies.map((movie: any, index) => (
              <Link to={`/movie/${movie.id}`} key={`${movie.id}-${index}`}>
                <div
                  key={movie.id}
                  className="flex h-[200px] mx-[1%] sm:w-[90%] sm:h-[150px] justify-start items-start sm:mx-auto  border border-black shadow-lg my-5 overflow-hidden"
                >
                  <div className="mb-3">
                    <div className="min-w-[100px] max-w-[100px]">
                      {!movie.poster_path ? (
                        <img src={loadingImage} alt="loading_image" />
                      ) : (
                        <img
                          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                          alt={movie.title}
                          className="w-full h-[150px] rounded"
                        />
                      )}
                    </div>
                  </div>
                  <div className="ml-4 w-full">
                    <h1 className="font-bold text-sm my-2">{movie.title}</h1>
                    <p className="text-sm text-gray-600 my-2">
                      {movie.release_date}
                    </p>
                    <p className="text-sm my-2 line-clamp-3">
                      {movie.overview}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default SearchTest;
