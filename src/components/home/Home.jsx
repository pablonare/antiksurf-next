import Header from "../../components/layout/Header/Header";
import Hero from "./Hero/Hero";
import Intro from "./Intro/Intro";
import SurfLessons from "./SurfLessons/SurfLessons";
import UpcomingTrips from "./UpcomingTrips/UpcomingTrips";
import Rentals from "./Rentals/Rentals"; 
import Footer from "../../components/layout/Footer/Footer";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Antik Surf Club | Surf Club in Asilah, Morocco</title>
        <meta
          name="description"
          content="Surf lessons, surf trips and unforgettable experiences in Asilah, Morocco."
        />
        <link rel="canonical" href="https://antiksurf.com/" />
      </Helmet>

      <Header />
      <Hero />   
      <Intro />
      <UpcomingTrips />
      <SurfLessons />
      <Rentals />
      <Footer />
    </>
  );
}

export default Home;