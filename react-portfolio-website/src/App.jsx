import Header from "./components/header/Header";
import Nav from "./components/nav/nav";
import About from "./components/about/About";
import Experience from "./components/experience/experience";
import Service from "./components/service/service";
import Portfolio from "./components/portfolio/portfolio";
import Testimoials from "./components/testimonials/testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimoials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
