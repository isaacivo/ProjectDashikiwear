import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");

  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // 🔥 DEBUG
    console.log("TOKEN:", token);
    console.log("BACKEND URL:", backendUrl);

    if (!token) {
      toast.error("Please login first");
      return;
    }

    try {
      let orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );

            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      // 🔥 SWITCH PAYMENT METHOD
      switch (method) {
        case "cod":
          const response = await axios.post(
            `${backendUrl}/api/order/place`,
            orderData,
            {
              headers: {
                token: token,
              },
            }
          );

          if (response.data.success) {
            toast.success("Order placed successfully");
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;

        case "stripe":
          const responseStripe = await axios.post(
            `${backendUrl}/api/order/stripe`,
            orderData,
            {
              headers: {
                token: token,
              },
            }
          );

          if (responseStripe.data.success) {
            window.location.replace(responseStripe.data.session_url);
          } else {
            toast.error(responseStripe.data.message);
          }
          break;

        default:
          break;
      }
    } catch (error) {
      console.error("ORDER ERROR:", error);
      toast.error("Order failed. Check console.");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="container py-5 border-top">
      <div className="row">

        {/* LEFT */}
        <div className="col-md-6">
          <h4 className="mb-4">
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          </h4>

          <div className="row mb-3">
            <div className="col">
              <input required name="firstName" value={formData.firstName} onChange={onChangeHandler} className="form-control" placeholder="First name" />
            </div>
            <div className="col">
              <input required name="lastName" value={formData.lastName} onChange={onChangeHandler} className="form-control" placeholder="Last name" />
            </div>
          </div>

          <input required name="email" value={formData.email} onChange={onChangeHandler} className="form-control mb-3" placeholder="Email address" />

          <input required name="street" value={formData.street} onChange={onChangeHandler} className="form-control mb-3" placeholder="Street" />

          <div className="row mb-3">
            <div className="col">
              <input required name="city" value={formData.city} onChange={onChangeHandler} className="form-control" placeholder="City" />
            </div>
            <div className="col">
              <input name="state" value={formData.state} onChange={onChangeHandler} className="form-control" placeholder="State" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <input required name="zipcode" value={formData.zipcode} onChange={onChangeHandler} className="form-control" placeholder="Zipcode" />
            </div>
            <div className="col">
              <input required name="country" value={formData.country} onChange={onChangeHandler} className="form-control" placeholder="Country" />
            </div>
          </div>

          <input required name="phone" value={formData.phone} onChange={onChangeHandler} className="form-control mb-3" placeholder="Phone" />
        </div>

        {/* RIGHT */}
        <div className="col-md-6">
          <div className="mb-4">
            <CartTotal />
          </div>

          <h4 className="mt-4">
            <Title text1={"PAYMENT"} text2={"METHOD"} />
          </h4>

          <div className="d-flex flex-column flex-lg-row gap-2 mb-4">

            {/* Stripe */}
            <div onClick={() => setMethod("stripe")} className={`border p-2 d-flex align-items-center gap-2 ${method === "stripe" ? "border-success" : ""}`}>
              <div className={`border rounded-circle ${method === "stripe" ? "bg-success" : ""}`} style={{ width: "16px", height: "16px" }}></div>
              <img src={assets.stripe_logo} alt="" style={{ height: "20px" }} />
            </div>

            {/* COD */}
            <div onClick={() => setMethod("cod")} className={`border p-2 d-flex align-items-center gap-2 ${method === "cod" ? "border-success" : ""}`}>
              <div className={`border rounded-circle ${method === "cod" ? "bg-success" : ""}`} style={{ width: "16px", height: "16px" }}></div>
              <p className="text-muted small mb-0">CASH ON DELIVERY</p>
            </div>
          </div>

          <div className="text-end">
            <button type="submit" className="btn btn-dark px-4 py-2">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;