import React, { useContext, useMemo, useState } from "react";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { ShopContext } from "../context/ShopContext";

const ProductCollection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  // Dropdown states
  const [openCategory, setOpenCategory] = useState(true);
  const [openType, setOpenType] = useState(true);
  const [openSize, setOpenSize] = useState(false);

  // Toggle category
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((a) => a !== value)
        : [...prev, value]
    );
  };

  // Toggle subcategory
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((a) => a !== value)
        : [...prev, value]
    );
  };

  // ✅ FILTER + SORT (clean logic)
  const filteredProducts = useMemo(() => {
    let productsCopy = [...products];

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    if (sortType === "low-high") {
      productsCopy.sort((a, b) => a.price - b.price);
    } else if (sortType === "high-low") {
      productsCopy.sort((a, b) => b.price - a.price);
    }

    return productsCopy;
  }, [products, search, showSearch, category, subCategory, sortType]);

  return (
    <div className="container py-5 border-top">
      <div className="row">

        {/* ---------------- FILTER SIDEBAR ---------------- */}
        <div className="col-md-3">

          <div className="d-flex align-items-center gap-2 mb-3">
            <h5 className="mb-0">FILTER</h5>
            <hr className="flex-grow-1" style={{ borderColor: "#d4a373" }} />
          </div>

          {/* CATEGORY */}
          <div className="filter-dropdown">
            <div
              className="filter-header"
              onClick={() => setOpenCategory(!openCategory)}
            >
              CATEGORY
              <span>{openCategory ? "−" : "+"}</span>
            </div>

            {openCategory && (
              <div className="filter-content">
                {["Women", "Men", "Accessories"].map((cat) => (
                  <div className="form-check mb-2" key={cat}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={cat}
                      id={cat}
                      onChange={toggleCategory}
                    />
                    <label className="form-check-label" htmlFor={cat}>
                      {cat}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* TYPE */}
          <div className="filter-dropdown">
            <div
              className="filter-header"
              onClick={() => setOpenType(!openType)}
            >
              TYPE
              <span>{openType ? "−" : "+"}</span>
            </div>

            {openType && (
              <div className="filter-content">
                {[
                  "Dresses",
                  "Sets",
                  "Tops",
                  "Skirts",
                  "Shirts",
                  "Kaftans",
                  "Trousers",
                  "Shorts",
                  "Head Wraps",
                ].map((type) => (
                  <div className="form-check mb-2" key={type}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={type}
                      id={type}
                      onChange={toggleSubCategory}
                    />
                    <label className="form-check-label" htmlFor={type}>
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* SIZE */}
          <div className="filter-dropdown">
            <div
              className="filter-header"
              onClick={() => setOpenSize(!openSize)}
            >
              SIZE
              <span>{openSize ? "−" : "+"}</span>
            </div>

            {openSize && (
              <div className="filter-content">
                {["S", "M", "L", "XL"].map((size) => (
                  <div className="form-check mb-2" key={size}>
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">{size}</label>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* ---------------- PRODUCTS SECTION ---------------- */}
        <div className="col-md-9">

          <div className="d-flex justify-content-between align-items-center mb-4">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />

            <select
              onChange={(e) => setSortType(e.target.value)}
              className="form-select w-auto"
            >
              <option value="relavent">Sort by: Relevance</option>
              <option value="low-high">Price Low → High</option>
              <option value="high-low">Price High → Low</option>
            </select>
          </div>

          <div className="row g-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <div className="col-6 col-md-4 col-lg-3" key={item._id}>
                  <ProductItem
                    id={item._id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                  />
                </div>
              ))
            ) : (
              <div className="text-muted">
                No products match the selected filters.
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductCollection;