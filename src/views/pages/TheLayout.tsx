import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Main from "./common/Main";

const TheLayout = () => {
  return (
    <div>
      <div className="">
        <Header />
      </div>
      <main className="">
        <Main />
      </main>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default TheLayout;





