import React from "react";
import { Link } from "react-router-dom";

const restaurants = [
  {
    id: 1,
    name: "McDonald's",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200",
  },
  {
    id: 2,
    name: "Pizza Hut",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200",
  },
  {
    id: 3,
    name: "Burger King",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200",
  },
  {
    id: 4,
    name: "Domino's",
    image:
      "https://images.unsplash.com/photo-1520201163981-8cc95007dd2e?q=80&w=1200",
  },
  {
    id: 5,
    name: "KFC",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200",
  },
  {
    id: 6,
    name: "Subway",
    image:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1200",
  },
];

export default function Restaurants() {
  return (
    <div>

      

      {/* Restaurants Section */}
      <div className="min-h-screen bg-gray-100 px-10 py-16">

        <h1 className="text-6xl font-bold text-center mb-16">
          Popular Restaurants
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {restaurants.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h2 className="text-3xl font-bold">
                  {item.name}
                </h2>

                <p className="mt-4 text-gray-600 text-lg">
                  Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                </p>

                <button className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold">
                  View More
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}