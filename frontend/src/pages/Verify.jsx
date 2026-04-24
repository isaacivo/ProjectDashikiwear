import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

const Verify = () => {

  // Access global values and functions from context
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext)

  // Get search parameters from URL (e.g., /verify?success=true&orderId=abc123)
  const [searchParams, setSearchParams] = useSearchParams()
  const success = searchParams.get('success')
  const orderId = searchParams.get('orderId')

  // Function to verify Stripe payment status
  const verifyPayment = async () => {
    try {
      // If user is not logged in, stop execution
      if (!token) {
        return null
      }

      // Make a POST request to the backend to verify the Stripe payment
      const response = await axios.post(
        backendUrl + '/api/order/verifyStripe',
        { success, orderId },
        { headers: { token } }
      )

      if (response.data.success) {
        // If verification is successful, clear the cart and redirect to orders page
        setCartItems({})
        navigate('/orders')
      } else {
        // If verification fails, redirect back to cart
        navigate('/cart')
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  // useEffect runs once when the component mounts (or if `token` changes)
  useEffect(() => {
    verifyPayment()
  }, [token])

  // Show a verifying message while this runs
  return (
    <div className="text-center py-5 text-muted">
      Verifying your payment, please wait...
    </div>
  )
}

export default Verify
