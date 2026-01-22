import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Products from "./components/products";
import AboutUs from "./components/aboutus";
import FindUs from "./components/findus";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <AboutUs />
      <FindUs />
      <Footer />
    </>
  );
}
