import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingMovies } from "../Redux/features/FetchingTrendingMovies";
import { Appdispatch, RootState } from "../Redux/store/Store";
import CartSlider from "../Cart Slider/Cartslider";
import TrendingText from "../Trending/TrendingText";
const TrendingMovies = () => {
  const dispatch = useDispatch<Appdispatch>();
  const { moviesTrending } = useSelector(
    (state: RootState) => state.trendingMovies
  );
  const [selectedType, setSelectedType] = useState<"day" | "week">("day");

  useEffect(() => {
    dispatch(fetchTrendingMovies(selectedType));
  }, [dispatch, selectedType]);

  useEffect(() => {
    if (moviesTrending.length > 0) {
    }
  }, [moviesTrending]);

  return (
    <div>
      <TrendingText
        setSelectedType={setSelectedType}
        selectedType={selectedType}
      />
      {moviesTrending.length > 0 && (
        <CartSlider slidesPerView={5} items={moviesTrending} />
      )}
    </div>
  );
};

export default TrendingMovies;
