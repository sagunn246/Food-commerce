import React, { useEffect, useState } from "react";
import Card from "./component/Card";
import productDataApi from "../Api/productData.api";

const Product = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    productDataApi(setProductData);
  }, []);

  return (
    <div className="px-5 py-3 flex flex-wrap gap-6 max-h-6xl justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-5 gap-10">
            {productData.map((item) => (
        <Card data={item} key={item.id} />
      ))}
      </div>
  
    </div>
  );
};

export default Product;
