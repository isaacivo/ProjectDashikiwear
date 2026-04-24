import React, { useState, useMemo } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
  // Image upload states
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  // Product detail states
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState('Dog Toys');
  const [subCategory, setSubCategory] = useState('Outdoor Toys');
  const [bestseller, setBestseller] = useState(false);

  // Sizes selected by admin
  const [sizes, setSizes] = useState([]);

  // Hardcoded size options (since no DB products context here)
  const allSizes = useMemo(() => {
    return ["Small", "Medium", "Large", "Standard", "1kg", "5kg", "12kg", "500g", "1 pack", "3 pack", "6 pack"];
  }, []);

  // Submit handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      // Create FormData to send files and text data
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append('bestseller', bestseller);
      formData.append('sizes', JSON.stringify(sizes));

      // Add images if present
      image1 && formData.append('image1', image1);
      image2 && formData.append('image2', image2);
      image3 && formData.append('image3', image3);
      image4 && formData.append('image4', image4);

      // Make API request to backend
      const response = await axios.post(backendUrl + '/api/product/add', formData, {
        headers: { token },
      });

      // Handle success
      if (response.data.success) {
        toast.success(response.data.message);

        // Clear form after adding product
        setName('');
        setDescription('');
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice('');
        setSizes([]);

        // 🚀 Tell the client to reload products next time it loads
        localStorage.setItem('refreshProducts', 'true');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="container p-4 border rounded bg-light">
      {/* Upload Images */}
      <div className="mb-3">
        <label className="form-label">Upload Images</label>
        <div className="d-flex gap-2">
          {[image1, image2, image3, image4].map((img, idx) => (
            <label key={idx} htmlFor={`image${idx + 1}`}>
              <img
                src={!img ? assets.upload_area : URL.createObjectURL(img)}
                alt=""
                className="img-thumbnail"
                style={{ width: '80px', cursor: 'pointer' }}
              />
              <input
                type="file"
                id={`image${idx + 1}`}
                hidden
                onChange={(e) => {
                  const setter = [setImage1, setImage2, setImage3, setImage4][idx];
                  setter(e.target.files[0]);
                }}
              />
            </label>
          ))}
        </div>
      </div>

      {/* Product name */}
      <div className="mb-3">
        <label className="form-label">Product Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* Product description */}
      <div className="mb-3">
        <label className="form-label">Product Description</label>
        <textarea
          className="form-control"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>

      {/* Category, Subcategory, Price */}
      <div className="row g-3 mb-3">
        <div className="col">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Dog Toys">Dog Toys</option>
            <option value="Dog Food">Dog Food</option>
            <option value="Dog Treats">Dog Treats</option>
          </select>
        </div>
        <div className="col">
          <label className="form-label">Sub Category</label>
          <select
            className="form-select"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
          >
            <option value="Outdoor Toys">Outdoor Toys</option>
            <option value="Plush & Rubber">Plush & Rubber</option>
            <option value="Chew Toys">Chew Toys</option>
            <option value="Fetch Toys">Fetch Toys</option>
            <option value="Interactive Toys">Interactive Toys</option>
            <option value="Dry Food">Dry Food</option>
            <option value="Wet Food">Wet Food</option>
            <option value="Dental">Dental</option>
          </select>
        </div>
        <div className="col">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Dynamic size selection */}
      <div className="mb-3">
        <label className="form-label">Product Sizes</label>
        <div className="d-flex gap-2 flex-wrap">
          {allSizes.map((size) => (
            <span
              key={size}
              className={`badge p-2 cursor-pointer ${sizes.includes(size) ? 'bg-warning' : 'bg-secondary'}`}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes(size)
                    ? prev.filter((s) => s !== size)
                    : [...prev, size]
                )
              }
            >
              {size}
            </span>
          ))}
        </div>
      </div>

      {/* Bestseller toggle */}
      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="bestseller"
          checked={bestseller}
          onChange={() => setBestseller((prev) => !prev)}
        />
        <label className="form-check-label" htmlFor="bestseller">
          Add to Bestseller
        </label>
      </div>

      {/* Submit button */}
      <button type="submit" className="btn btn-dark">
        ADD
      </button>
    </form>
  );
};

export default Add;
