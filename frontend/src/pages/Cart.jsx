import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
import LatestCollection from '../components/LatestCollection';


const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item]
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="container py-5 border-top">
      <div className="mb-4 text-center">
        <h2><Title text1="YOUR" text2="CART" /></h2>
      </div>

      <div className="mb-4">
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);

          return (
            <div key={index} className="row align-items-center border-top border-bottom py-3 g-3">
              <div className="col-md-6 d-flex gap-3 align-items-start">
                <img
                  src={productData.image[0]}
                  alt=""
                  className="img-fluid"
                  style={{ maxWidth: '80px' }}
                />
                <div>
                  <h6 className="mb-1">{productData.name}</h6>
                  <div className="d-flex gap-3">
                    <p className="mb-0 text-muted">{currency}{productData.price}</p>
                    <span className="badge bg-light border text-dark">{item.size}</span>
                  </div>
                </div>
              </div>

              <div className="col-4 col-md-3">
                <input
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  onChange={(e) =>
                    e.target.value === '' || e.target.value === '0'
                      ? null
                      : updateQuantity(item._id, item.size, Number(e.target.value))
                  }
                  className="form-control w-75"
                />
              </div>

              <div className="col-2 text-end">
                <img
                  src={assets.bin_icon}
                  alt="Remove"
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className="img-fluid cursor-pointer"
                  style={{ width: '20px', cursor: 'pointer' }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="d-flex justify-content-end my-5">
        <div style={{ width: '100%', maxWidth: '450px' }}>
          <CartTotal />
          <div className="text-end mt-3">
            <button
              className="btn btn-dark px-4 py-2"
              onClick={() => navigate('/place-order')}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
      
      {/* Latest Collection Section */}
      <div className="mt-5">
        <LatestCollection />
      </div>
    </div>
  );
};

export default Cart;
