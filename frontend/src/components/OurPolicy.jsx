import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className="container py-5 text-center text-muted small">
      <div className="row justify-content-around align-items-center g-4">
        {/* Exchange Policy */}
        <div className="col-12 col-sm-4">
          <img
            src={assets.exchange_icon}
            alt="Exchange Policy Icon"
            className="mb-3"
            style={{ width: '50px' }}
          />
          <p className="fw-semibold mb-1">Easy Exchange Policy</p>
          <p className="text-secondary">We offer hassle free exchange policy</p>
        </div>

        {/* Return Policy */}
        <div className="col-12 col-sm-4">
          <img
            src={assets.quality_icon}
            alt="Return Policy Icon"
            className="mb-3"
            style={{ width: '50px' }}
          />
          <p className="fw-semibold mb-1">7 Days Return Policy</p>
          <p className="text-secondary">We provide 7 days free return policy</p>
        </div>

        {/* Customer Support */}
        <div className="col-12 col-sm-4">
          <img
            src={assets.support_img}
            alt="Support Icon"
            className="mb-3"
            style={{ width: '50px' }}
          />
          <p className="fw-semibold mb-1">Best customer support</p>
          <p className="text-secondary">We provide 24/7 customer support</p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
