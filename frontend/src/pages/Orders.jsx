import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        `${backendUrl}/api/order/userorders`,
        {}, // no need to send userId explicitly
        { headers: { token } }
      );

      if (response.data.success) {
        const allOrdersItem = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            item.status = order.status;
            item.payment = order.payment;
            item.paymentMethod = order.paymentMethod;
            item.date = order.date;
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="container border-top pt-5">
      <div className="mb-4 text-center">
        <Title text1="MY" text2="ORDERS" />
      </div>

      {orderData.length === 0 ? (
        <p className="text-muted text-center">No orders found.</p>
      ) : (
        orderData.map((item, index) => (
          <div
            key={index}
            className="border-top border-bottom py-3 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3"
          >
            <div className="d-flex gap-3">
              <img
                src={item.image[0]}
                alt=""
                className="img-fluid rounded"
                style={{ width: "80px", height: "auto" }}
              />
              <div>
                <p className="fw-medium mb-1">{item.name}</p>
                <div className="d-flex gap-3 small text-muted">
                  <span>
                    {currency}
                    {item.price}
                  </span>
                  <span>Quantity: {item.quantity}</span>
                  <span>Size: {item.size}</span>
                </div>
                <p className="mb-1 small">
                  Date:{" "}
                  <span className="text-muted">
                    {new Date(item.date).toDateString()}
                  </span>
                </p>
                <p className="mb-1 small">
                  Payment:{" "}
                  <span className="text-muted">{item.paymentMethod}</span>
                </p>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center gap-2 mt-2 mt-md-0">
              <div className="d-flex align-items-center gap-2">
                <span
                  className={`badge rounded-circle ${
                    item.payment ? "bg-success" : "bg-danger"
                  }`}
                  style={{ width: "10px", height: "10px" }}
                ></span>
                <p className="mb-0 small">{item.status}</p>
              </div>
              <button
                onClick={loadOrderData}
                className="btn btn-outline-secondary btn-sm"
              >
                Track Order
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;