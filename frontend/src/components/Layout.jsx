import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, transparentHeader = false }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header transparentOnHero={transparentHeader} />
      <main className="flex-1 page-enter">{children}</main>
      <Footer />
    </div>
  );
}
