import Cast from '../Cast/Cast'
import Footer from '../Footer/Footer'
// import Header from '../Header/Header'
import PersonSearch from '../Header/Test'
import Mainbanner from '../Mainbanner/Mainbanner'
// import PopularText from '../Popular/PopularText'
import PopularMovies from '../PopularMovies/PopularMovies'
import Loader from '../SkeletonLoader/Loader'
import TrendingMovies from '../Trending Movies/TrendingMovies'

const Parentcomponent = () => {
  return (
    <div>
        {/* <Header/> */}
        <Mainbanner/>
        <PopularMovies/>
        <TrendingMovies/>
        {/* <Footer/> */}
        {/* <Cast/>
        <Loader/> */}
        {/* <PersonSearch/> */}
        <Footer/>
    </div>
  )
}

export default Parentcomponent