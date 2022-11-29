import { useContext, useEffect } from "react"
import AiringToday from "./Categories/AiringToday"
import NowPlayingMovies from "./Categories/NowPlayingMovies"
import OnTheAirTV from "./Categories/OnTheAirTV"
import PopularMovies from "./Categories/PopularMovies"
import PopularTV from "./Categories/PopularTV"
import TopRatedMovies from "./Categories/TopRatedMovies"
import TopRatedTV from "./Categories/TopRatedTV"
import UpcomingMovies from "./Categories/UpcomingMovies"
import { Context } from "./Context"
import FeaturedVideo from "./FeaturedVideo"

const Home = () => {

  const ctx = useContext(Context)

  return (
    <>
      <FeaturedVideo featureHeaderID={505642} featureHeader={ctx.popularMovies} featureHeaderLargePosterPath={ctx.large_poster_path} />
      <PopularMovies />
      <TopRatedMovies />
      <UpcomingMovies />
      <NowPlayingMovies />
      <PopularTV />
      <OnTheAirTV />
      <AiringToday />
      <TopRatedTV />
    </>
  )
}

export default Home