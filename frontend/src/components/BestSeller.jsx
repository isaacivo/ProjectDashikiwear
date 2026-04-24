import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-5">
      {/* Section Heading */}
      <div className="text-center mb-4">
        <Title text1="BEST" text2="SELLERS" />
        <p className="mx-auto w-75 small text-muted">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
        </p>
      </div>

      {/* Centered container for product grid */}
      <div className="d-flex justify-content-center">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div className="row g-3 justify-content-center">
            {bestSeller.map((item, index) => (
              <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
                <ProductItem
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
