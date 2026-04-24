import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div className="container py-4 border-top">
      
      {/* Section Title */}
      <div className="text-center pt-4">
        <h2 className="mb-4">
          <Title text1={"ABOUT"} text2={"US"} />
        </h2>
      </div>

      {/* About Image and Description */}
      <div className="row my-5 align-items-center gy-4">
        
        <div className="col-md-6 text-center">
          <img
            src={assets.about_img}
            alt="Dashikiwear"
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6">
          
          <h5 className="mt-4 text-dark">Our Story</h5>
          <p className="text-muted">
            Dashikiwear was created to celebrate the richness, beauty, and
            identity of traditional African fashion. Our brand is rooted in
            culture and inspired by the bold patterns, vibrant colors, and
            timeless designs that define African wear.
          </p>

          <p className="text-muted">
            We believe fashion is more than clothing — it is a statement of
            heritage, pride, and individuality. From elegant dresses to
            modern kaftans and accessories, every piece in our collection is
            designed to blend tradition with contemporary style.
          </p>

          <h5 className="mt-4 text-dark">Our Mission</h5>
          <p className="text-muted">
            Our mission is to bring authentic African fashion to a global
            audience while maintaining quality, craftsmanship, and cultural
            integrity. We aim to empower individuals to express themselves
            confidently through unique, meaningful designs.
          </p>

        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center mb-4">
        <h2>
          <Title text1={"WHY"} text2={"CHOOSE US"} />
        </h2>
      </div>

      <div className="row mb-5 g-3">
        
        <div className="col-md-4">
          <div className="border rounded p-4 h-100 bg-light">
            <h6>Authentic Designs</h6>
            <p className="text-muted">
              Our collections are inspired by traditional African prints,
              patterns, and craftsmanship, ensuring every piece tells a story.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="border rounded p-4 h-100 bg-light">
            <h6>Premium Quality</h6>
            <p className="text-muted">
              We focus on high-quality fabrics and attention to detail,
              delivering clothing that is both stylish and durable.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="border rounded p-4 h-100 bg-light">
            <h6>Modern & Cultural Fusion</h6>
            <p className="text-muted">
              We combine traditional African aesthetics with modern fashion
              trends to create versatile pieces for any occasion.
            </p>
          </div>
        </div>

      </div>

      {/* Newsletter */}
      <NewsletterBox />
    </div>
  );
};

export default About;