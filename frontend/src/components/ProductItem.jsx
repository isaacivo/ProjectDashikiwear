import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="text-decoration-none text-dark">
      <div className="card h-100 shadow-sm bg-white text-dark overflow-hidden" style={{ border: '4px solid #e89b64', borderRadius: '8px' }}>
        <div className="product-image-wrapper">
          <img src={image[0]} className="card-img-top product-image" alt={name} />
        </div>
        <div className="card-body p-2">
          <h6 className="card-title text-truncate">{name}</h6>
          <p className="card-text fw-bold">{currency}{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
