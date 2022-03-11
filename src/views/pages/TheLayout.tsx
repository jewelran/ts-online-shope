import React from "react";
import Footer from "./common/Footer";
import Main from "./common/Main";
import Header from "./common/Header";

const TheLayout = () => {
  return <div className="">
    <div className="">
      <Header/>
    </div>
    <main className="">
      <Main/>
    </main>
    <div className="">
      <Footer/>
    </div>
  </div>
};

export default TheLayout;
