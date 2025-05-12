import gitLogo from "../../assets/git-blacks.jpg";
import Logo from "../../assets/website-logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SearchMovies } from "../Redux/features/SearchMovies";
import { Appdispatch } from "../Redux/store/Store";
import { useState } from "react";

const Header = () => {
  const dispatch = useDispatch<Appdispatch>();
  const [query, setquery] = useState<string>("");
  const navigation = useNavigate();

  const handlethesearch = () => {
    if (query.trim()) {
      dispatch(SearchMovies(query))
        .unwrap()
        .then((results) => {
          console.log("Movies:", results.movies);
          console.log("Persons:", results.person);
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
    <>
      <div className="nav-color flex justify-between items-center p-2 ">
        <div className="img-container" onClick={() => navigation("/")}>
          <img
            src={Logo}
            alt="logo"
            className="w-[250px] h-[30px] sm:w-[500px] sm:h-[40px] cursor-pointer"
          />
        </div>

        <div className="flex justify-center items-center space-x-4">
          <div className="git-logo">
            <a href="https://github.com/sakthi-cannyfore" target="_blank">
              <img
                src={gitLogo}
                alt="git-logo"
                className="w-[30px] h-[30px] mx-2 sm:w-[40px] sm:h-[40px] rounded-full" 
              />
            </a>
          </div>

          <div className="flex justify-center items-center x-2">
            <input
              type="text"
              placeholder="Search..."
              onKeyDown={handleSearch}
              onChange={(e) => setquery(e.target.value)}
              className="h-[25px] w-[100px] sm:w-[250px] border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <AiOutlineSearch
              className="w-[25px] h-[25px] p-1 border-none bg-white cursor-pointer"
              onClick={handlethesearch}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
