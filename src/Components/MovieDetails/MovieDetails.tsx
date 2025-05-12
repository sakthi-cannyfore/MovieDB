import { fetchPopularMoviesById } from "../Redux/features/FetchingPopularMovies";
import { useSelector, useDispatch } from "react-redux";
import { Appdispatch, RootState } from "../Redux/store/Store";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import StarRating from "../Star Rating/StartRating";
import Cast from "../Cast/Cast";
import CastPerson from "../Cast/CastPerson";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import { api_key, base_Url } from "../Utils";
import { HttpClient } from "../Redux/ApiService";
import { Movie } from "../Types/types";
const MovieDetails = () => {
  const [director, setDirector] = useState<Movie[]>([]);
  const dispatch = useDispatch<Appdispatch>();
  const { movieId } = useParams<{ movieId: string }>();

  const { selectedMovie } = useSelector(
    (state: RootState) => state.popularMovies
  );

  useEffect(() => {
    if (movieId) {
      dispatch(fetchPopularMoviesById(Number(movieId)));
    }
  }, [movieId, dispatch]);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  useEffect(() => {
    const Directorurl = `${base_Url}/movie/${movieId}/credits?api_key=${api_key}`;

    HttpClient.get(Directorurl).then((res: any) => {
      setDirector(
        res.data.crew.filter((person: any) => person.job === "Director")
      );
    });

    if (director.length > 0) {
      console.log("testtt", director);
    }
  }, [movieId]);

  return (
    <>
      <div
        className="relative bg-cover bg-center bg-fixed min-h-screen text-white pt-[25px]"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${selectedMovie?.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

        <div className="relative z-10 px-4">
          <div className="flex flex-col md:flex-row">
            <img
              src={`https://image.tmdb.org/t/p/w500${selectedMovie?.poster_path}`}
              alt="hero"
              className="rounded-lg w-[200px] h-[350px] sm:w-[120px] md:w-[110px] md:h-[450px] lg:w-[200px] xl:w-[350px]"
            />

            <div className="ml-[20px]">
              <h1 className="font-semibold text-4xl mb-2">
                {selectedMovie?.title || "Movie Title"}
              </h1>

              <div className="flex flex-wrap gap-2 my-3 text-sm sm:text-base">
                <div className="w-[60px] h-[25px] px-2 py-1 border rounded-md flex items-center justify-center">
                  <h1 className="text-xs sm:text-sm font-semibold">PG-13</h1>
                </div>

                <ul className="flex flex-wrap gap-2">
                  <li className="mr-3">
                    <p>{formatDate(selectedMovie?.release_date || "")} (US)</p>
                  </li>
                  {selectedMovie?.genres?.map((genre: any, index: number) => (
                    <li key={index} className="px-2 py-1 rounded-md text-sm">
                      {genre.name}
                    </li>
                  ))}
                </ul>

                <li className="mr-[5px] flex ml-[5px]"></li>
                <li className="mr-3">{selectedMovie?.runtime ?? 0}Minutes</li>
              </div>

              <div className="flex gap-1 text-yellow-300 ">
                <StarRating popularity={selectedMovie?.popularity ?? 0} />
              </div>
              <i className="opacity-75 block mt-2">{selectedMovie?.tagline}</i>

              <div>
                <h1 className="mt-[50px] font-bold">Overview</h1>
                <p className="mt-[15px] max-w-2xl">{selectedMovie?.overview}</p>
              </div>

              <div className="mt-[10px] md:mt-[50px]">
                {director.map((person, index) => (
                  <div key={index}>
                    <h1>{person?.name}</h1>
                    <p>Director</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <RelatedVideos />
          <CastPerson />
          <Cast />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
