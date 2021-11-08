import React from 'react'
import Header from "../components/Header";
import Breadcrumb from '../components/Breadcrumb';
import Footer from "../components/Footer";
import Main from '../components/ProductDetail/main';
export default function ProductDetail() {
  return (
    <div className="app">
    <div className="lg:mx-auto">
      <Header />
     <Breadcrumb/>
     <Main/>
    </div>
    <Footer />
  </div>
  )
}
