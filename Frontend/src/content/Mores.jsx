import React from "react";
import Navbar from "../components/Navbar";
import Freebook from "../components/Freebook";
import More from "../components/More";
import Footer from "../components/Footer";


function mores() {
  return (
    <>
      <Navbar />
      <div className="">
      <Freebook />
      </div>
      <div className="min-h-screen">
        <More />
      </div>     
      <Footer />
      <div>
        Checking
      </div>
    </>
  );
}

export default mores;