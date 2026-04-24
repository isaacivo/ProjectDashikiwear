import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';



const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [size, setSize] = useState('');
  const [image, setImage] = useState('');
  const [reviewCount, setReviewCount] = useState(0);

  {/* Random number genrator */}
  useEffect(() => {
  if (productData) {
    setReviewCount(Math.floor(Math.random() * 15) + 1); // 1 to 15
  }
}, [productData]);


  useEffect(() => {
    const foundProduct = products.find(item => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
    }
  }, [productId, products]);

  if (!productData) return <div className="text-center py-5">Loading...</div>;

  return (
    <div className="container py-5 border-top">
      <div className="row gy-4">
        {/* Product Images */}
        <div className="col-md-6">
          <div className="row g-2 flex-md-column flex-row overflow-auto">
            <div className="col-12 d-flex flex-md-column flex-row gap-2">
              {productData.image.map((img, index) => (
                <img
                  key={index}
                  onClick={() => setImage(img)}
                  src={img}
                  alt=""
                  className="img-thumbnail cursor-pointer"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
              ))}
            </div>
            <div className="col mt-3">
              <img src={image} alt="" className="img-fluid rounded border" />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="col-md-6">
          <h2>{productData.name}</h2>
          <div className="d-flex align-items-center mb-3">
            {[...Array(4)].map((_, i) => (
              <img
                key={i}
                src={assets.star_icon}
                alt=""
                style={{ width: "12px" }}
              />
            ))}
            <img src={assets.star_dull_icon} alt="" style={{ width: "12px" }} />
            <span className="ms-2">({reviewCount})</span>
          </div>

          <h3 className="text-success mb-3">
            {currency}
            {productData.price}
          </h3>
          <p className="text-muted">{productData.description}</p>

          {/* Size Options */}
          <div className="my-4">
            <p className="fw-semibold mb-2">Select Size:</p>
            <div className="d-flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`btn btn-outline-secondary ${
                    item === size ? "border-warning" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            className="btn btn-dark px-4"
            onClick={() => addToCart(productData._id, size)}
          >
            Add to Cart
          </button>

          {/* Info Notes */}
          <hr className="my-4" />
          <ul className="text-muted small">
            <li>100% Original product</li>
            <li>Cash on delivery available</li>
            <li>Easy return within 7 days</li>
          </ul>
        </div>
      </div>

      {/* Description and Reviews */}
      <div className="mt-5">
        <div className="d-flex border-bottom">
          <button className="btn btn-light border-bottom border-2 border-dark rounded-0">
            Description
          </button>
          <button className="btn btn-light border-0">Reviews (12)</button>
        </div>
        <div className="p-4 border">
          <p className="text-muted small">{productData.description}</p>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-5">
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </div>
  );
};

export default Product;
