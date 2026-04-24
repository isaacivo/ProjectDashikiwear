import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    // Add newsletter logic here
  };

  return (
    <div className="text-center my-5 px-3">
      <h4 className="fw-semibold text-dark">Subscribe now & get 20% off</h4>
      <p className="text-muted mt-2">
        Join our mailing list to receive exclusive offers and pet care tips.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="row g-2 justify-content-center align-items-center mt-4"
      >
        <div className="col-12 col-sm-6">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="subscribe-btn btn px-4 py-2">
            SUBSCRIBE
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsletterBox;
