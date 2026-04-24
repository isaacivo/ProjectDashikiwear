import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div className="container border-top pt-5">
      {/* Title */}
      <div className="text-center text-2xl mb-4">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Contact Content */}
      <div className="row align-items-center my-5 g-4">
        {/* Image */}
        <div className="col-12 col-md-6">
          <img
            src={assets.contact_img}
            alt="Contact Us"
            className="img-fluid rounded w-100"
          />
        </div>

        {/* Contact Info */}
        <div className="col-12 col-md-6 d-flex flex-column gap-3">
          <p className="fw-semibold text-uppercase text-secondary mb-0">
            Our Store
          </p>
          <p className="text-muted mb-2">
            54709 Willms Station <br />
            Suite 350, Dublin, Ireland
          </p>
          <p className="text-muted mb-4">
            Tel: (415) 555-0132 <br />
            Email: admin@petstore.com
          </p>

          <p className="fw-semibold text-uppercase text-secondary mb-0">
            Careers at PetStore
          </p>
          <p className="text-muted mb-3">
            Learn more about our teams and job openings.
          </p>

          <button className="btn btn-outline-dark px-4 py-2">
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Newsletter Box */}
      <div className="my-5">
        <NewsletterBox />
      </div>
    </div>
  );
};

export default Contact;
