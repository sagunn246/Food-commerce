import Categories from "./Component/Categories/Categories";
import HeroSection from "./Component/HeroSection/HeroSection";
import NavBar from "./Component/NavBar/NavBar";
import Product from "./Component/Product/Product";
import Footer from "./Component/Footer/Footer";
import productDataApi from "./Component/Api/productData.api";
import { useState, useEffect } from "react";

function App() {
  const [productData, setProductData] = useState([]);
  const [MainData, setMainData] = useState([]);

  useEffect(() => {
    productDataApi(setProductData, setMainData);
  }, []);
  return (
    <div className="">
      <NavBar setProductData={setProductData} MainData={MainData} />
      <HeroSection />
      <Categories setProductData={setProductData} MainData={MainData} />
      <Product productData={productData} MainData={MainData} />
      <Footer />
    </div>
  );
}

export default App;
