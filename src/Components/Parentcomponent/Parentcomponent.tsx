import Footer from "../Footer/Footer";
import Mainbanner from "../Mainbanner/Mainbanner";
import PopularMovies from "../PopularMovies/PopularMovies";
import TrendingMovies from "../Trending Movies/TrendingMovies";

const Parentcomponent = () => {
  return (
    <div>
      <Mainbanner />
      <PopularMovies />
      <TrendingMovies />
      <Footer />
    </div>
  );
};

export default Parentcomponent;
