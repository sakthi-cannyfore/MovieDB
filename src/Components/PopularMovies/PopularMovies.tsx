import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "../Redux/features/FetchingPopularMovies";
import { Appdispatch, RootState } from "../Redux/store/Store";
import CartSlider from "../Cart Slider/Cartslider";
import PopularText from "../Popular/PopularText";
const PopularMovies = () => {
  const dispatch = useDispatch<Appdispatch>();
  const { movies } = useSelector((state: RootState) => state.popularMovies);
  const [selectedType, setSelectedType] = useState<"movie" | "tv">("movie");

  useEffect(() => {
    dispatch(fetchPopularMovies(selectedType));
  }, [dispatch, selectedType]);

  useEffect(() => {
    if (movies.length > 0) {
      console.log("Movies fetched:", movies);
    }
  }, [movies]);

  return (
    <div>
      <PopularText
        setSelectedType={setSelectedType}
        selectedType={selectedType}
      />
      {movies.length > 0 && <CartSlider slidesPerView={5} items={movies} />}
    </div>
  );
};

export default PopularMovies;
