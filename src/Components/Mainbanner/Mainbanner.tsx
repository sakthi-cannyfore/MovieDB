import banner from "../../assets/home-banner.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SearchMovies } from "../Redux/features/SearchMovies";
import { Appdispatch } from "../Redux/store/Store";
import { useState } from "react";
const Mainbanner = () => {
  const dispatch = useDispatch<Appdispatch>();
  const [query, setquery] = useState<string>("");
  const navigation = useNavigate();

  const handlethesearch = () => {
    if (query.trim()) {
      dispatch(SearchMovies(query))
        .unwrap()
        .then((results) => {
          console.log("Search results ****:", results);
          navigation("/search");
        })

        .catch((err) => {
          console.error("Error while searching:", err);
        });
    }
  };
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handlethesearch();
    }
  };
  return (
    <div>
      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px]">
        <div className="absolute text-white px-4 sm:px-8 md:px-12 w-full">
          <div className="relative top-[50px] sm:top-[60px] p-4 z-50">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white z-100">
              Welcome.
            </h1>

            <h1 className="text-xl sm:text-2xl relative top-[15px] z-15">
              Millions of movies, TV shows, and people to discover. Explore now.
            </h1>

            <div className="mt-[30px] md:mt-[60px] flex flex-row sm:flex-row items-center space-y-2 sm:space-y-0 ">
              <input
                type="text"
                onKeyDown={handleSearch}
                onChange={(e) => setquery(e.target.value)}
                className="h-[35px] w-[200px]  sm:h-[40px]  sm:w-full px-2 py-1 focus:outline-none rounded-l-md text-black"
                placeholder="Search for a movie, TV show, Person..."
              />
              <button
                className="relative top-[-4px] md:top-[.9px] bg-gradient-to-r from-teal-500 to-sky-400 h-[35px] sm:h-[40px] px-4 rounded-r-md "
                onClick={handlethesearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <img
          src={banner}
          alt="main-content"
          className="w-[900px] h-full sm:w-full  object-cover"
          //  className="w-full h-[300px] object-cover transition-transform duration-300 ease-in-out hover:scale-110 z-0"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900 via-transparent to-transparent opacity-70 z-10" />
      </div>
    </div>
  );
};

export default Mainbanner;
