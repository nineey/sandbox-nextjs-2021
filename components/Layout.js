import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="md:container mx-auto pt-6">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
