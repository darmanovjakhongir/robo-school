import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Stats from "../../components/Stats/Stats";
import Benefits from "../../components/Course/Benefits";
import Carousel from "../../components/Carousel/Carousel";
import Pricing from "../../components/Pricing/Pricing";
import SignUp from "../../components/Course/SignUp";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <Benefits />
      <Carousel />
      <Pricing />
      <SignUp />
      <Footer />
    </div>
  );
}

export default Home;
