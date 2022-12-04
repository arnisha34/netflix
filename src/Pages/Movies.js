import { useContext } from "react"
import { Context } from "../components/context"
import FeaturedVideo from "../components/featuredVideo"
import { Slider } from "../components/slider"

const Movies = () => {

  const ctx = useContext(Context)

  return (
    <>
      <FeaturedVideo featureHeaderID={724495} featureHeader={ctx.popularMovies} />
      <Slider sliderTitle={"Popular on Netflix"} sliderCategory={ctx.popularMovies} />
      <Slider sliderTitle={"Latest Movies"} sliderCategory={ctx.topRatedMovies} />
      <Slider sliderTitle={"Trending Now"} sliderCategory={ctx.upcomingMovies} />
      <Slider sliderTitle={"Now Playing"} sliderCategory={ctx.nowPlayingMovies} />
    </>
  )
}

export default Movies