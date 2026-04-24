import { NavLink, useNavigate } from "react-router";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

function Navbar() {
  const { getCartCount } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="z-10 bg-white shadow-md py-4 px-8 flex items-center justify-between rounded-lg w-full max-w-5xl mt-0.5 sticky top-0">
      <div className="text-2xl font-bold text-gray-800">OnlineSHOP</div>
      <ul className="flex gap-6 text-lg justify-between font-semibold text-gray-700 items-center">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black hover:text-blue-500 transition"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black hover:text-blue-500 transition"
            }
            to="/products"
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500 flex items-center gap-1" : "text-black hover:text-blue-500 transition flex items-center gap-1"
            }
            to="/cart"
          >
            Cart
            <span className="bg-rose-500 text-white text-xs px-2 py-0.5 rounded-full">
              {getCartCount()}
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black hover:text-blue-500 transition"
            }
            to="/payment"
          >
            Payment
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black hover:text-blue-500 transition"
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        
        {/* Auth section */}
        {currentUser ? (
          <>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-black hover:text-blue-500 transition"
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <button 
                onClick={handleLogout}
                className="text-white bg-slate-800 hover:bg-slate-700 px-4 py-1.5 rounded-md text-sm transition"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <NavLink
              className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-md text-sm transition"
              to="/login"
            >
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
