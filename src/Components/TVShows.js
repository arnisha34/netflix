import { useContext } from "react"
import { Context } from "./Context"
import FeaturedVideo from "./FeaturedVideo"
import { Slider } from "./Slider"

const TVShows = () => {

  const ctx = useContext(Context)

  return (
    <>
      <FeaturedVideo featureHeaderID={119051} featureHeader={ctx.topRatedTV} featureHeaderLargePosterPath={ctx.large_poster_path} />
      <Slider sliderTitle={"Popular TV"} sliderCategory={ctx.popularTV} />
      <Slider sliderTitle={"On The Air"} sliderCategory={ctx.otaTV} />
      <Slider sliderTitle={"Airing Today"} sliderCategory={ctx.airingTodayTV} />
      <Slider sliderTitle={"Top Rated TV"} sliderCategory={ctx.topRatedTV} />
    </>
  )
}

export default TVShows