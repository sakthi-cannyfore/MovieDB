import { Route, Routes } from "react-router-dom";
import Parentcomponent from "./Components/Parentcomponent/Parentcomponent";
import Header from "./Components/Header/Header";
import NotFound from "./Components/NotFound/NotFound";
import SearchTest from "./Components/SearchResults/SearchTest";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import RelatedVideos from "./Components/RelatedVideos/RelatedVideos";
import PersonDetails from "./Components/Person/PersonDetails";
import People from "./Components/People/People";
import KnownAs from "./Components/KnownAs";

function App() {
  return (
    <>
      <div className="my-10%">
        <Header />
        <Routes>
          <Route path="/" element={<Parentcomponent />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/search" element={<SearchTest />} />
          <Route path="/test" element={<RelatedVideos />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
          <Route path="/person/:id" element={<PersonDetails />} />
          <Route path="/pe" element={<People />} />
          <Route path="/v" element={<KnownAs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
