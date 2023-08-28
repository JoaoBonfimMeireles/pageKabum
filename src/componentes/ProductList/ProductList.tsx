import React, { useEffect, useState } from "react";

import "./style.css";
import Product from "../Products";

interface Product {
  image: string;
  price: number;
  description: string;
  rating?: Rating;
  category?: string;
  id?: number;
}

interface Rating {
  count: number; 
  rate: number;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json: Product[]) => {
        return setProducts(json.filter((item) => item.category === "electronics"));
      });
  }, []);

  return (
    <div className="product-list-box">
      {products.map((product, index) => (
        <Product
          img={product.image}
          productText={product.description}
          productValue={product.price}
          key={index}
        />
      ))}
    </div>
  );
};

export default ProductList;
