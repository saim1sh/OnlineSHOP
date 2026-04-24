import React, { useEffect, useState } from 'react'
import { db } from '../firebase/config'
import { collection, getDocs } from 'firebase/firestore'
import { useCart } from '../context/CartContext'

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsData);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="p-10 text-center text-xl font-semibold text-slate-600">Loading products...</div>;
  }

  return (
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-lg m-10">
      {products.map((product) => (
        <div key={product.id} className="border border-slate-200 bg-white shadow-md overflow-hidden hover:-translate-y-1 transition-all rounded-lg flex flex-col">
          <div className="rounded-t-lg overflow-hidden aspect-square flex items-center justify-center bg-slate-50 relative group">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-5 flex flex-col flex-grow space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg text-slate-900 line-clamp-2">
                {product.title}
              </h3>
            </div>

            {product.uploadDate && (
              <p className="text-slate-500 text-sm">
                Date added: <span className="font-semibold">
                  {typeof product.uploadDate === 'string'
                    ? product.uploadDate
                    : (product.uploadDate?.seconds
                      ? new Date(product.uploadDate.seconds * 1000).toLocaleDateString()
                      : 'N/A')}
                </span>
              </p>
            )}

            <div className="flex items-center justify-between mt-auto pt-4">
              <span className="text-2xl font-bold text-slate-900">${product.price}</span>
              <span className={`text-sm font-medium ${product.stock > 0 ? 'text-emerald-600' : 'text-rose-500'}`}>
                {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
              </span>
            </div>

            <button
              onClick={() => addToCart(product)}
              disabled={product.stock <= 0}
              className={`w-full py-2.5 rounded-lg font-semibold transition ${product.stock > 0
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                }`}
            >
              {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      ))}

      {products.length === 0 && (
        <div className="col-span-full py-20 text-center text-slate-500 text-lg">
          No products available. Add some from the Admin Dashboard!
        </div>
      )}
    </div>
  );
}
