import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  
  const [editingId, setEditingId] = useState(null);

  const productsCollectionRef = collection(db, "products");

  const getProducts = async () => {
    try {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setErrorMsg("");
    } catch (error) {
      console.error("Firestore Error:", error);
      setErrorMsg(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString("en-GB", {
      day: "2-digit", month: "short", year: "numeric"
    }); // e.g., "18 Nov 2025"

    try {
      if (editingId) {
        const productDoc = doc(db, "products", editingId);
        await updateDoc(productDoc, { title, price: Number(price), stock: Number(stock), imageUrl });
        setEditingId(null);
      } else {
        await addDoc(productsCollectionRef, {
          title,
          price: Number(price),
          stock: Number(stock),
          imageUrl,
          uploadDate: date
        });
      }
      
      setTitle("");
      setPrice("");
      setStock("");
      setImageUrl("");
      getProducts();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteProduct = async (id) => {
    const productDoc = doc(db, "products", id);
    await deleteDoc(productDoc);
    getProducts();
  };

  const editProduct = (product) => {
    setEditingId(product.id);
    setTitle(product.title);
    setPrice(product.price);
    setStock(product.stock);
    setImageUrl(product.imageUrl);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8 w-full mt-10">
      <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>
      {errorMsg && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg font-medium">
          Error: {errorMsg}. (Check your Firebase rules in the console!)
        </div>
      )}

      {/* Add / Edit Form */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
        <h2 className="text-xl font-semibold mb-4 text-slate-700">
          {editingId ? "Edit Product" : "Add New Product"}
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Product Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            placeholder="Stock Quantity"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="border p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="url"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="border p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button type="submit" className="md:col-span-2 bg-slate-800 text-white font-semibold py-2 rounded-md hover:bg-slate-700 transition">
            {editingId ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>

      {/* Product List */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
        <h2 className="text-xl font-semibold mb-4 text-slate-700">Product List</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b bg-slate-50 text-slate-600">
                <th className="p-3">Image</th>
                <th className="p-3">Title</th>
                <th className="p-3">Price</th>
                <th className="p-3">Stock</th>
                <th className="p-3">Date Added</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-slate-50 transition">
                  <td className="p-3">
                    <img src={product.imageUrl} alt={product.title} className="w-12 h-12 object-cover rounded-md bg-slate-200" />
                  </td>
                  <td className="p-3 font-medium text-slate-800">{product.title}</td>
                  <td className="p-3 text-slate-600">${product.price}</td>
                  <td className="p-3 text-emerald-600 font-semibold">{product.stock}</td>
                  <td className="p-3 text-slate-500 text-sm">
                    {typeof product.uploadDate === 'string' 
                      ? product.uploadDate 
                      : (product.uploadDate?.seconds 
                          ? new Date(product.uploadDate.seconds * 1000).toLocaleDateString() 
                          : 'N/A')}
                  </td>
                  <td className="p-3 space-x-3">
                    <button onClick={() => editProduct(product)} className="text-blue-500 hover:text-blue-600 font-medium">Edit</button>
                    <button onClick={() => deleteProduct(product.id)} className="text-red-500 hover:text-red-600 font-medium">Delete</button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan="6" className="p-4 text-center text-slate-500">No products found. Start adding some!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
