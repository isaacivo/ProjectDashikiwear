import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  // State to store fetched orders
  const [orders, setOrders] = useState([]);

  // Function to fetch all orders
  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse()); // Latest orders first
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Handler to update order status
  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders(); // Refresh orders after update
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Fetch orders on mount and when token changes
  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="container my-4">
      <h4 className="mb-4">Order Page</h4>

      {/* Loop through each order */}
      {orders.map((order, index) => (
        <div
          key={index}
          className="border rounded shadow-sm p-3 mb-3 row g-3 align-items-start"
        >
          {/* Order icon */}
          <div className="col-auto">
            <img
              src={assets.parcel_icon}
              alt="Order"
              style={{ width: "40px" }}
            />
          </div>

          {/* Order details */}
          <div className="col-12 col-md-5">
            {/* Items list */}
            <div>
              {order.items.map((item, idx) => (
                <p key={idx} className="mb-1 small">
                  {item.name} x {item.quantity} <span>{item.size}</span>
                  {idx !== order.items.length - 1 && ","}
                </p>
              ))}
            </div>

            {/* Customer info */}
            <p className="fw-semibold mt-2 mb-1">
              {order.address.firstName} {order.address.lastName}
            </p>
            <p className="mb-0 small">
              {order.address.street}, {order.address.city},{" "}
              {order.address.state}, {order.address.country},{" "}
              {order.address.zipcode}
            </p>
            <p className="small">{order.address.phone}</p>
          </div>

          {/* Order summary */}
          <div className="col-12 col-md-3">
            <p className="small mb-1">Items: {order.items.length}</p>
            <p className="small mb-1">Method: {order.paymentMethod}</p>
            <p className="small mb-1">
              Payment: {order.payment ? "Done" : "Pending"}
            </p>
            <p className="small mb-1">
              Date: {new Date(order.date).toLocaleDateString()}
            </p>
          </div>

          {/* Order amount */}
          <div className="col-6 col-md-1 text-md-center fw-semibold">
            {currency}
            {order.amount}
          </div>

          {/* Status dropdown */}
          <div className="col-6 col-md-1">
            <select
              className="form-select form-select-sm"
              value={order.status}
              onChange={(e) => statusHandler(e, order._id)}
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
