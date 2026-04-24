import React from 'react';
import { Link } from 'react-router';

export default function About() {
  return (
    <div className="w-full bg-slate-50 min-h-screen my-4 rounded-xl overflow-hidden shadow-sm border border-slate-100">
      {/* Header Banner */}
      <div className="relative bg-slate-900 overflow-hidden py-24 px-6 text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-indigo-900/40" />
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl opacity-50" />
        </div>
        
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-md">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Philosophy</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            We believe in empowering professionals with completely uncompromised tools. 
            Discover the unified mission driving our commitment to excellence.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-24 space-y-32">
        
        {/* Story Section */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase">The Origin</h2>
            <h3 className="text-4xl font-black text-slate-800 leading-tight">
              Built by professionals,<br className="hidden md:block"/> for professionals.
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              Founded in 2025, OnlineSHOP emerged from a collective frustration with 
              constantly compromising on vital workspace equipment. We set out to create a trusted marketplace 
              where absolute quality, premium performance, and flawless reliability never come into question.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Today, thousands of global creators, engineers, and top executives rely entirely on our 
              curation to execute their most demanding, resource-heavy tasks with complete confidence safely.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-[2rem] transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
            <div className="h-96 bg-slate-800 rounded-[2rem] overflow-hidden shadow-2xl flex items-center justify-center p-8 relative">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
               <div className="text-blue-400 font-extrabold text-3xl tracking-[0.3em] uppercase opacity-30 transform rotate-[-15deg] scale-150 pointer-events-none">
                  Core Infrastructure
               </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-white p-12 md:p-16 rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-full -z-10" />
          
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-slate-800">Our Core Principles</h2>
             <p className="text-slate-500 mt-4 max-w-xl mx-auto">These non-negotiable statutes guide every decision we make.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 group">
               <h4 className="text-2xl font-black text-slate-800 flex items-center gap-4">
                  <span className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-lg shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">1</span>
                  No Compromise
               </h4>
               <p className="text-slate-600 leading-relaxed pl-16">
                 We exclusively select the absolute best. If an item doesn't significantly exceed our strict internal evaluation logic, it doesn't make the catalog. Period.
               </p>
            </div>
            <div className="space-y-4 group">
               <h4 className="text-2xl font-black text-slate-800 flex items-center gap-4">
                  <span className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center text-lg shadow-inner group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">2</span>
                  Transparency First
               </h4>
               <p className="text-slate-600 leading-relaxed pl-16">
                 Clear specs, verified honest reviews, and highly transparent pricing models. You fundamentally deserve to know exactly what elements you invest in.
               </p>
            </div>
            <div className="space-y-4 group">
               <h4 className="text-2xl font-black text-slate-800 flex items-center gap-4">
                  <span className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-lg shadow-inner group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">3</span>
                  Community Driven
               </h4>
               <p className="text-slate-600 leading-relaxed pl-16">
                 Our roadmap is actively dictated by our users. We proactively aggregate community feedback to forge immensely better vendor partnerships globally.
               </p>
            </div>
            <div className="space-y-4 group">
               <h4 className="text-2xl font-black text-slate-800 flex items-center gap-4">
                  <span className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center text-lg shadow-inner group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300">4</span>
                  Sustainable Practice
               </h4>
               <p className="text-slate-600 leading-relaxed pl-16">
                 We optimize our logistics networks continually to actively reduce global carbon footprint safely while simultaneously retaining unmatched delivery speeds.
               </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center pb-12">
           <h3 className="text-3xl font-black text-slate-800 mb-8">Ready to upgrade your workflow?</h3>
           <Link to="/products" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 active:scale-95 shadow-xl shadow-slate-900/20 hover:shadow-slate-900/40">
              Explore The Catalog
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
           </Link>
        </section>

      </div>
    </div>
  );
}
