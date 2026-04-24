import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subCategory }) => {
  const [related, setRelated] = useState([]);
  const { products } = useContext(ShopContext);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter(item => category === item.category);
      productsCopy = productsCopy.filter(item => subCategory === item.subCategory);
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory]);

  return (
    <div className="my-5">
      <div className="text-center mb-4">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>

      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
        {related.map((item, index) => (
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
  );
};

export default RelatedProducts;
