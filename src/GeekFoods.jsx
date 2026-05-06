import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Quote from "./pages/Quote";
import Restaurants from "./pages/Restaurants";
import Foods from "./pages/Foods";
import Contact from "./pages/Contact";

const testimonials = [
  {
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "Gladis Lennon",
    role: "Head of SEO",
    img: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "Gladis Lennon",
    role: "Head of SEO",
    img: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "Gladis Lennon",
    role: "Head of SEO",
    img: "https://randomuser.me/api/portraits/women/79.jpg",
  },
];

export default function GeekFoods() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Navbar */}
      <nav className="bg-[#0B1220] text-white px-10 py-5 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600"></div>

          <h1 className="text-3xl font-bold">
            GeekFoods
          </h1>
        </div>

        <ul className="flex gap-10 text-lg font-semibold">

          <li>
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>

          <li>
            <Link to="/quote" className="hover:text-blue-400">
              Quote
            </Link>
          </li>

          <li>
            <Link to="/restaurants" className="hover:text-blue-400">
              Restaurants
            </Link>
          </li>

          <li>
            <Link to="/foods" className="hover:text-blue-400">
              Foods
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </li>

        </ul>

        <button className="bg-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-700 duration-300">
          Get started
        </button>
      </nav>

      {/* Routes */}
      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <div>

              {/* Hero Section */}
              <section
                className="h-screen bg-cover bg-center flex items-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600')",
                }}
              >
                <div className="ml-20 max-w-2xl">

                  <h1 className="text-7xl font-bold text-white leading-tight">
                    Let us find your
                    <span className="text-pink-500 block">
                      Forever Food.
                    </span>
                  </h1>

                  <p className="mt-8 text-2xl text-gray-200 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nesciunt illo tenetur
                    fuga ducimus numquam ea!
                  </p>

                  <div className="flex gap-6 mt-10">

                    <button className="bg-pink-600 text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-pink-700 duration-300">
                      Search Now
                    </button>

                    <button className="bg-white px-10 py-4 rounded-lg font-bold text-pink-600 text-xl hover:bg-gray-200 duration-300">
                      Know More
                    </button>

                  </div>
                </div>
              </section>

              {/* Testimonials */}
              <section className="px-20 py-20">

                <h2 className="text-5xl font-bold text-center mb-16">
                  Testimonials
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                  {testimonials.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white p-10 rounded-2xl shadow-lg"
                    >

                      <p className="text-xl text-gray-700 leading-relaxed">
                        {item.text}
                      </p>

                      <div className="flex items-center gap-5 mt-8">

                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-16 h-16 rounded-full"
                        />

                        <div>
                          <h3 className="font-bold text-2xl">
                            {item.name}
                          </h3>

                          <p className="text-gray-500 text-lg">
                            {item.role}
                          </p>
                        </div>

                      </div>
                    </div>
                  ))}

                </div>
              </section>

            </div>
          }
        />

        {/* Quote Page */}
        <Route
          path="/quote"
          element={<Quote />}
        />

        {/* Restaurants Page */}
        <Route
          path="/restaurants"
          element={<Restaurants />}
        />

        {/* Foods Page */}
        <Route
          path="/foods"
          element={<Foods />}
        />

        {/* Contact Page */}
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
  {/* Footer */}
  <footer className="bg-[#111827] text-white py-20 text-center">

  <h1 className="text-5xl font-bold">
    logoipsum
  </h1>

  <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
    Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Quisquam, voluptatibus.
  </p>

  {/* Footer Links */}
  <div className="flex flex-wrap justify-center gap-10 mt-10 text-lg font-semibold">

    <p className="hover:text-pink-500 cursor-pointer">
      About
    </p>

    <p className="hover:text-pink-500 cursor-pointer">
      Careers
    </p>

    <p className="hover:text-pink-500 cursor-pointer">
      History
    </p>

    <p className="hover:text-pink-500 cursor-pointer">
      Services
    </p>

    <p className="hover:text-pink-500 cursor-pointer">
      Projects
    </p>

    <p className="hover:text-pink-500 cursor-pointer">
      Blog
    </p>

  </div>

  {/* Social Icons */}
  <div className="flex justify-center gap-8 mt-12 text-lg font-semibold">

    <a
      href="https://facebook.com"
      target="_blank"
      rel="noreferrer"
      className="hover:text-blue-500"
    >
      Facebook
    </a>

    <a
      href="https://instagram.com"
      target="_blank"
      rel="noreferrer"
      className="hover:text-pink-500"
    >
      Instagram
    </a>

    <a
      href="https://twitter.com"
      target="_blank"
      rel="noreferrer"
      className="hover:text-sky-400"
    >
      Twitter
    </a>

    <a
      href="https://github.com"
      target="_blank"
      rel="noreferrer"
      className="hover:text-gray-400"
    >
      GitHub
    </a>

  </div>

</footer>
    </div>
  );
}