import noman from "../../assets/no-photo-male.svg";
import { useDispatch, useSelector } from "react-redux";
import { Appdispatch, RootState } from "../Redux/store/Store";
import { useParams } from "react-router-dom";
import { fetchPopularMoviesById } from "../Redux/features/FetchingPopularMovies";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const People = () => {
  const { person } = useSelector((state: RootState) => state.searchMovies);
  const dispatch = useDispatch<Appdispatch>();
  const { movieId } = useParams<{ movieId: string }>();

  useEffect(() => {
    if (movieId) {
      dispatch(fetchPopularMoviesById(Number(movieId)));
    }
  }, [movieId, dispatch]);

  if(person?.length == 0 ){
    <div>There is no people 's Found</div>
  }

  return (
    <div className="ml-[4%]">
      <h1 className="font-bold text-1xl m-3">People</h1>

      {person?.length === 0 ? (
  <div className="flex justify-center text-gray-400">There is no people found</div>
) : (
  person?.map((p: any) => (
    <div key={p.id} className="flex items-center">
      <div>
        <img
          src={p.profile_path ? `https://image.tmdb.org/t/p/w200${p.profile_path}` : noman}
          className="w-[80px] h-[80px] object-cover m-3 rounded-md"
          alt={p.name}
        />
      </div>
      <div>
        <h1 className="font-bold text-lg">{p.name}</h1>
        <div className="flex items-center gap-2 flex-wrap">
          <h1>Acting •</h1>
          {p.known_for.map((item: any,index:any) => (
            <Link to={`/movie/${item.id}`} key={`${item.id}-${index}`}>
              <h1 className="text-blue-600 cursor-pointer">
                {item.name || item.title}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  ))
)}

    </div>
  );
};

export default People;
