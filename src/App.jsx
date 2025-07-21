import Categories from "./Component/Categories/Categories";
import HeroSection from "./Component/HeroSection/HeroSection";
import NavBar from "./Component/NavBar/NavBar";
import Product from "./Component/Product/Product";
import Footer from "./Component/Footer/Footer";
function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Categories />
      <Product />
      <Footer/>
    </div>
  );
}

export default App;
