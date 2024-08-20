import React, { useContext } from "react";

import Breadcrum from "../components/Breadcrum/Breadcrum";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DiscriptionBox from "../components/DiscriptionBox/DiscriptionBox";
import RelatedProducts from "../components/RalatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DiscriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
