import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="container mx-auto mt-8 text-center">
            <h1 className="mb-4 text-3xl font-bold"> About</h1>
            <p className="mb-4 text-lg">Website ini merupakan hanya sebuah percobaan pembuatan website menggunakan framework reactjs dan tailwindcss</p>
            <Link to="/component/Home" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                Ke Halaman Utama
            </Link>
        </div>
    );
}

export default About;
