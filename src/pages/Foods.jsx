import React from "react";

const foods = [
  {
    id: 1,
    name: "Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200",
  },
  {
    id: 2,
    name: "Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200",
  },
  {
    id: 3,
    name: "Pasta",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200",
  },
  {
    id: 4,
    name: "Sandwich",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1200",
  },
  {
    id: 5,
    name: "Fries",
    image:
      "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=1200",
  },
  {
    id: 6,
    name: "Noodles",
    image:
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1200",
  },
];

export default function Foods() {
  return (
    <div className="min-h-screen bg-gray-100 px-10 py-16">

      <h1 className="text-6xl font-bold text-center mb-16">
        Popular Foods
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {foods.map((item) => (
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
                Delicious and freshly prepared food
                for food lovers.
              </p>

              <button className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold">
                Order Now
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}