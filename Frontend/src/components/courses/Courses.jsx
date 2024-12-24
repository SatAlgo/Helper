import React from "react";
import Navbar from "../Navbar";
import Freebook from "../Freebook";
import Course from "../Course";
import Footer from "../Footer";

function Courses() {
    return (
        <>

            <Navbar />
            <Freebook />
            <div className="min-h-screen">
                <Course />
            </div>
            <Footer />

        </>
    );
}

export default Courses;