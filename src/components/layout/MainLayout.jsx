import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
