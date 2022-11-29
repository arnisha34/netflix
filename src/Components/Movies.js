import { useContext } from "react"
import { Context } from "./Context"
import NowPlayingMovies from "./Categories/NowPlayingMovies"
import PopularMovies from "./Categories/PopularMovies"
import TopRatedMovies from "./Categories/TopRatedMovies"
import UpcomingMovies from "./Categories/UpcomingMovies"
import FeaturedVideo from "./FeaturedVideo"

const Movies = () => {

  const ctx = useContext(Context)

  return (
    <>
      <FeaturedVideo featureHeaderID={724495} featureHeader={ctx.popularMovies} featureHeaderLargePosterPath={ctx.large_poster_path} />
      <PopularMovies />
      <TopRatedMovies />
      <UpcomingMovies />
      <NowPlayingMovies />
    </>
  )
}

export default Movies