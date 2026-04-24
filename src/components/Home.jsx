import React from 'react';
import { Link } from 'react-router';
import img from '../assets/photos/image.png';

export default function Home() {
  return (
    <div className="w-full bg-slate-50 font-sans">
      {/* Premium Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 group">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10" />
          <img 
            src={img} 
            alt="Hero Background" 
            className="absolute inset-0 w-full h-full object-cover object-right transform group-hover:scale-105 transition-transform duration-[20s] ease-out opacity-60"
          />
          <div className="relative z-20 px-8 py-24 sm:px-16 sm:py-32 lg:px-24 lg:py-40 flex flex-col justify-center min-h-[600px] max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold tracking-wider uppercase mb-6 w-fit border border-blue-500/30 backdrop-blur-sm">
              New Arrival
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Empower your<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">digital workspace.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-light mb-10 max-w-xl leading-relaxed">
              Discover unparalleled performance with our curated collection of enterprise-grade components and accessories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="inline-flex justify-center items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
              >
                Shop Now
              </Link>
              <Link 
                to="/about" 
                className="inline-flex justify-center items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-semibold backdrop-blur-md transition-all active:scale-95"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Card 1 */}
          <div className="flex flex-col items-start bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-1 group">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Premium Quality</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              We source only the absolute highest caliber components. Zero compromises on durability or structural integrity.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-start bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-1 group">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Express Delivery</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Free expedited shipping on premium tier setups. Secure worldwide logistics backed by real-time tracking.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-start bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-1 group">
            <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Secure Checkout</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Bank-grade 256-bit AES encryption infrastructure. Your financial data privacy is our absolute highest mandate.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-24 mb-10 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Trusted by over 10,000+ professionals.</h2>
           <p className="text-slate-500 text-lg max-w-2xl mx-auto pb-4 font-light">
             Join the expanding network of global creators and engineers operating their most intensive tasks entirely on our curated setups.
           </p>
           <Link to="/products" className="inline-block border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-semibold px-10 py-4 rounded-full transition-colors active:scale-95 shadow-sm">
             Explore Our Catalog
           </Link>
        </div>
      </section>

    </div>
  );
}
