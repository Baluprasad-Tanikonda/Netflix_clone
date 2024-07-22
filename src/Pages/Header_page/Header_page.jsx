import React from "react";
import Header from "./Header";
import Feature1 from "./Feature1";
import Footer from "./../../Components/Footer/Footer";
import Faq from "./Faq";


const Header_page = () => {
  return (
    <div>
      <Header />
      <Feature1/>
      <Faq/>
      <Footer />
    </div>
  );
};

export default Header_page;
