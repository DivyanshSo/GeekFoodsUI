import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-6 py-16">

      <div className="bg-white shadow-2xl rounded-2xl p-12 w-full max-w-3xl">

        <h1 className="text-5xl font-bold text-center mb-10">
          Contact Us
        </h1>

        <form className="space-y-8">

          <div>
            <label className="block text-xl font-semibold mb-3">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-5 py-4 text-lg outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label className="block text-xl font-semibold mb-3">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-5 py-4 text-lg outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label className="block text-xl font-semibold mb-3">
              Message
            </label>

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-5 py-4 text-lg outline-none focus:border-pink-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-4 rounded-lg text-xl font-bold hover:bg-pink-700 duration-300"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
}