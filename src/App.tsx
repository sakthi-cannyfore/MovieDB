// import CartSlider from './Components/Header/Cartslider'
// import PopularTVShows from './Components/Header/PopularTvShows'
import { Route, Routes } from "react-router-dom";
import Parentcomponent from "./Components/Parentcomponent/Parentcomponent";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import NotFound from "./Components/NotFound/NotFound";
import SearchResults from "./Components/SearchResults/SearchResults";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import SearchTest from "./Components/SearchResults/SearchTest";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import RelatedVideos from "./Components/RelatedVideos/RelatedVideos";
import PersonDetails from "./Components/Person/PersonDetails";
import People from "./Components/People/People";
import KnownAs from "./Components/KnownAs";
// import Videos from "./Components/Video";
// import PopularText from './Components/Popular/PopularText'
// import Slider from './Components/ReusableComponents/Slider'
// import Testingcomponent from './Components/PopularMovies/PopularMovies'

function App() {
  return (
    <>
      <div className="my-10%">
        <Header />
        <Routes>
          <Route path="/" element={<Parentcomponent />} />
          <Route path="*" element={<NotFound/>}/>
          <Route path="/search" element={<SearchTest/>}/>
          <Route path="/test" element={<RelatedVideos/>}/>
          <Route path="/movie/:movieId" element={<MovieDetails/>}/>
          <Route path="/person/:id" element={<PersonDetails/>}/>
          <Route path="/pe" element={<People/>}/>
          <Route path="/v" element={<KnownAs/>}/>

          {/* <Route path="/e" element={<Videos/>}/> */}

        </Routes>
        {/* <PopularTVShows/> */}
        {/* <CartSlider/> */}
        {/* <Testingcomponent/> */}
      </div>
    </>
  );
}

export default App;
