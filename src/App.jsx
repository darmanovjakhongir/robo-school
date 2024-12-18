import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import CourseBenefits from "./components/CourseBenefits";
import Carousel from "./components/Carousel";
import Pricing from "./components/Pricing";
import CourseSignUp from "./components/CourseSignUp";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
            <main>
                <Hero />
                <Stats />
                <CourseBenefits />
                <Carousel />
                <Pricing />
                <CourseSignUp />
            </main>
            <Footer />
    </div>
  );
};

export default App;
