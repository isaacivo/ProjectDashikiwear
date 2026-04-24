import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';

const List = ({ token }) => {
  const [list, setList] = useState([]);

  // Fetch product list
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.success) {
        setList(response.data.products.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Remove product
  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/product/remove',
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="container py-4">
      <h4 className="mb-3">All Products List</h4>
      <div className="table-responsive">
        <table className="table table-bordered table-striped text-center align-middle">
          <thead className="table-light">
            <tr>
              <th scope="col" style={{ width: '80px' }}>Image</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col" style={{ width: '80px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.length > 0 ? (
              list.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={item.image[0]}
                      alt=""
                      className="img-thumbnail"
                      style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{currency}{item.price}</td>
                  <td>
                    <button
                      onClick={() => removeProduct(item._id)}
                      className="btn btn-sm btn-danger"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-muted">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
