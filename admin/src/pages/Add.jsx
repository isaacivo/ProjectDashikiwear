import React, { useState, useMemo } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {

  // Images
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  // Product Data
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Women");
  const [subCategory, setSubCategory] = useState("Dresses");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  // Sizes based on your product structure
  const allSizes = useMemo(() => {
    return ["XS", "S", "M", "L", "XL", "XXL", "One Size"];
  }, []);

  // Submit
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append('name', name);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append('bestseller', bestseller);
      formData.append('sizes', JSON.stringify(sizes));

      image1 && formData.append('image1', image1);
      image2 && formData.append('image2', image2);
      image3 && formData.append('image3', image3);
      image4 && formData.append('image4', image4);

      const response = await axios.post(
        backendUrl + '/api/product/add',
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success("Product added successfully ✨");

        setName('');
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice('');
        setSizes([]);

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

      {/* Product Name */}
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

      {/* Category / Subcategory / Price */}
      <div className="row g-3 mb-3">

        <div className="col">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Women">Women</option>
            <option value="Men">Men</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>

        <div className="col">
          <label className="form-label">Sub Category</label>
          <select
            className="form-select"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
          >
            {/* Women */}
            <option value="Dresses">Dresses</option>
            <option value="Sets">Sets</option>
            <option value="Skirts">Skirts</option>
            <option value="Tops">Tops</option>

            {/* Men */}
            <option value="Shirts">Shirts</option>
            <option value="Kaftans">Kaftans</option>
            <option value="Trousers">Trousers</option>
            <option value="Shorts">Shorts</option>

            {/* Accessories */}
            <option value="Head Wraps">Head Wraps</option>
          </select>
        </div>

        <div className="col">
          <label className="form-label">Price (€)</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

      </div>

      {/* Sizes */}
      <div className="mb-3">
        <label className="form-label">Product Sizes</label>
        <div className="d-flex gap-2 flex-wrap">
          {allSizes.map((size) => (
            <span
              key={size}
              className={`badge p-2 cursor-pointer ${sizes.includes(size) ? 'bg-warning' : 'bg-secondary'}`}
              onClick={() =>
                setSizes(prev =>
                  prev.includes(size)
                    ? prev.filter(s => s !== size)
                    : [...prev, size]
                )
              }
            >
              {size}
            </span>
          ))}
        </div>
      </div>

      {/* Bestseller */}
      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          checked={bestseller}
          onChange={() => setBestseller(prev => !prev)}
        />
        <label className="form-check-label">
          Add to Bestseller
        </label>
      </div>

      {/* Submit */}
      <button type="submit" className="btn btn-dark">
        ADD PRODUCT
      </button>

    </form>
  );
};

export default Add;