import { useState } from "react";
import { Link } from "react-router";
import { useCart } from "../context/CartContext";

const PAYMENT_METHODS = [
  { id: "bkash", name: "bKash", color: "text-pink-600", bg: "bg-pink-50", border: "border-pink-500" },
  { id: "nagad", name: "Nagad", color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-500" },
  { id: "rocket", name: "Rocket", color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-500" },
  { id: "cod", name: "Cash on Delivery", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-500" },
  { id: "card", name: "Credit/Debit Card", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-500" },
];

export default function Payment() {
  const { cartItems, getSubtotal } = useCart();
  const subtotal = getSubtotal();
  const tax = subtotal * 0.15;
  const shipping = subtotal > 1000 ? 0 : (subtotal === 0 ? 0 : 60);
  const total = subtotal + tax + shipping;

  const [selectedMethod, setSelectedMethod] = useState("bkash");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [trxId, setTrxId] = useState("");
  const [address, setAddress] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="max-w-3xl mx-auto mt-20 p-8 bg-white rounded-2xl shadow-sm text-center border border-slate-100">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
          ✓
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Payment Successful!</h2>
        <p className="text-slate-600 mb-8">Thank you for your purchase. Your order has been placed via {PAYMENT_METHODS.find(m => m.id === selectedMethod)?.name}.</p>
        <Link to="/" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition inline-block">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 w-full mt-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-sm text-slate-500 font-semibold uppercase tracking-wide">Checkout</p>
          <h1 className="text-3xl font-semibold text-slate-900">Payment Options</h1>
        </div>
        <Link to="/cart" className="text-sm font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-2 transition">
          <span>← Back to Cart</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side - Forms */}
        <div className="lg:col-span-2 space-y-6">
          {/* Delivery Details */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-semibold mb-4 text-slate-800">1. Delivery Address (Bangladesh)</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Address (House, Road, Area, City)</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
                  rows="3"
                  placeholder="e.g. House 12, Road 5, Dhanmondi, Dhaka"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-semibold mb-4 text-slate-800">2. Select Payment Method</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {PAYMENT_METHODS.map(method => (
                <div 
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`cursor-pointer border-2 rounded-xl p-4 flex flex-col items-center justify-center gap-2 transition-all ${selectedMethod === method.id ? method.border + ' ' + method.bg : 'border-slate-200 hover:border-slate-300'}`}
                >
                  <span className={`font-semibold ${selectedMethod === method.id ? method.color : 'text-slate-600'}`}>{method.name}</span>
                </div>
              ))}
            </div>

            {/* Dynamic Form based on selected method */}
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
              {['bkash', 'nagad', 'rocket'].includes(selectedMethod) && (
                <div className="space-y-4">
                  <div className={`p-4 rounded-lg mb-4 ${PAYMENT_METHODS.find(m => m.id === selectedMethod).bg}`}>
                    <p className={`font-medium ${PAYMENT_METHODS.find(m => m.id === selectedMethod).color}`}>
                      Please send ৳{total.toFixed(2)} to our {PAYMENT_METHODS.find(m => m.id === selectedMethod).name} Merchant Number: <span className="font-bold tracking-wider">01711-XXXXXX</span>
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Your {PAYMENT_METHODS.find(m => m.id === selectedMethod).name} Account Number</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition" 
                      placeholder="e.g. 017XXXXXXXX"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Transaction ID (TrxID)</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition" 
                      placeholder="e.g. 8N6A6X9P"
                      value={trxId}
                      onChange={(e) => setTrxId(e.target.value)}
                    />
                  </div>
                </div>
              )}

              {selectedMethod === 'card' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Card Number</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="XXXX XXXX XXXX XXXX" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Expiry Date</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="MM/YY" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">CVC</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="123" />
                    </div>
                  </div>
                </div>
              )}

              {selectedMethod === 'cod' && (
                <div className="p-4 bg-emerald-50 rounded-lg text-emerald-800">
                  <p className="font-medium">You have selected Cash on Delivery.</p>
                  <p className="text-sm mt-1">Please prepare exact change of ৳{total.toFixed(2)} when the delivery arrives.</p>
                  <p className="text-sm mt-1 font-semibold">Additional ৳60 delivery charge applies outside Dhaka.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Summary */}
        <div className="lg:col-span-1">
          <div className="border border-slate-200 bg-white rounded-2xl shadow-sm p-6 sticky top-28 space-y-6">
            <h2 className="text-xl font-semibold mb-4 text-slate-800">Order Summary</h2>
            
            <div className="space-y-4 border-slate-200">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal ({cartItems.length} items)</span>
                <span className="font-medium">৳{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Tax (15%)</span>
                <span className="font-medium">৳{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600 border-b border-slate-100 pb-4">
                <span>Shipping (Inside BD)</span>
                <span className="font-medium">
                  {shipping === 0 ? <span className="text-emerald-600">Free</span> : `৳${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-2xl font-bold pt-2 text-slate-900">
                <span>Total</span>
                <span>৳{total.toFixed(2)}</span>
              </div>
            </div>

            <button 
              onClick={handlePayment}
              disabled={cartItems.length === 0 || isProcessing}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 mt-6 ${
                cartItems.length === 0 || isProcessing
                  ? "bg-slate-300 text-slate-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/30"
              }`}
            >
              {isProcessing ? 'Processing...' : `Confirm Order • ৳${total.toFixed(2)}`}
            </button>
            
            <div className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Secure SSL Encrypted Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
