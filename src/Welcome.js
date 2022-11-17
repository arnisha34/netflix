import FAQ from "./FAQ";
import Hero from "./Hero";
import LeftContent from "./LeftContent"
import RightContent from "./RightContent";

const Welcome = () => {
  return (
    <>
      <Hero />
      <LeftContent title={"Enjoy on your TV."} subtitle={"Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."} />
      <RightContent title={"Watch everywhere."} subtitle={"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."} />
      <LeftContent title={"Create profiles for kids."} subtitle={"Send kids on adventures with their favorite characters in a space made just for them—free with your membership."} />
      <RightContent title={"Download your shows to watch offline."} subtitle={"Available on all plans except Basic with ads."} />
      <FAQ />
    </>

  )
}

export default Welcome