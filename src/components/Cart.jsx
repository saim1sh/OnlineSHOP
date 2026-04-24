import { Link, useNavigate } from "react-router";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getSubtotal } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const subtotal = getSubtotal();
  const tax = subtotal * 0.15;
  const finalShipping = subtotal > 1000 ? 0 : (subtotal === 0 ? 0 : 25);
  const total = subtotal + tax + finalShipping;

  return (
    <div className="w-full">
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-8 w-full mt-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500 font-semibold uppercase tracking-wide">
              Your bag
            </p>
            <h1 className="text-3xl font-semibold text-slate-900">
              Shopping Cart
            </h1>
          </div>
          <Link
            to="/products"
            className="text-sm font-semibold text-rose-500 hover:text-rose-600 flex items-center gap-2 transition"
          >
            <span>Continue shopping</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.length === 0 ? (
              <div className="p-10 text-center bg-white rounded-lg shadow-sm border border-slate-200">
                <p className="text-slate-500 font-medium">Your cart is empty.</p>
                <Link to="/products" className="text-blue-600 font-semibold hover:underline mt-2 inline-block">Browse Products</Link>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="w-full border border-slate-200 bg-white rounded-lg shadow-sm p-4 flex gap-4">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-24 h-24 object-contain rounded-lg bg-slate-50 border border-slate-100 p-2"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-lg text-slate-900 line-clamp-1">
                            {item.title}
                          </h3>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-slate-400 hover:text-rose-500 transition"
                          aria-label="Remove"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="h-8 w-8 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center hover:border-rose-300 hover:text-rose-500 transition"
                          >
                            −
                          </button>
                          <span className="text-sm font-semibold w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="h-8 w-8 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center hover:border-blue-300 hover:text-blue-500 transition"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-xl font-bold text-slate-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-1 ">
            <div className="border border-slate-200 bg-white rounded-lg shadow-sm p-8 sticky top-28 space-y-6">
              <h2 className="text-xl font-semibold mb-6 text-slate-800">Order Summary</h2>

              <div className="space-y-4 border-slate-200">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span className="font-medium">
                    {finalShipping === 0 ? (
                      <span className="text-emerald-600">Free</span>
                    ) : (
                      <span className="text-slate-800">${finalShipping.toFixed(2)}</span>
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-slate-600 border-b border-slate-100 pb-4">
                  <span>Tax (15%)</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-2xl font-bold pt-2 text-slate-900">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button 
                onClick={() => {
                  if (currentUser) {
                    navigate("/payment");
                  } else {
                    navigate("/login", { state: { from: "/payment" } });
                  }
                }}
                disabled={cartItems.length === 0}
                className={`w-full py-3 rounded-lg font-semibold transition-colors mt-6 ${
                  cartItems.length === 0
                    ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20"
                }`}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
