import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  const { products } = useContext(ShopContext);

  useEffect(() => {
    if (products.length > 0) {
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]);

  return (
    <div style={{ backgroundColor: "#8d9678", padding: "3rem 0" }}>
      <div className="container text-white">
        <div className="text-center mb-4">
          <h2 className="latest-heading">LATEST COLLECTIONS</h2>
          <hr className="latest-hr" />
          <p className="latest-subtext">
            Our latest collection, handpicked for your pet.
          </p>
        </div>

        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
          {latestProducts.map((item, index) => (
            <div className="col" key={index}>
              <ProductItem
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;
