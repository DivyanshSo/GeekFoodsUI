import React from "react";

const quotes = [
  {
    id: 1,
    quote: "People who love to eat are always the best people.",
    author: "Julia Child",
  },
  {
    id: 2,
    quote: "First we eat, then we do everything else.",
    author: "M.F.K. Fisher",
  },
  {
    id: 3,
    quote: "Cooking is like love. It should be entered into with abandon.",
    author: "Harriet Van Horne",
  },
  {
    id: 4,
    quote: "Life is uncertain. Eat dessert first.",
    author: "Ernestine Ulmer",
  },
];

const Quote = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        padding: "40px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          marginBottom: "40px",
        }}
      >
        Food Quotes
      </h1>

      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        {quotes.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#fff",
              padding: "25px",
              marginBottom: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <p
              style={{
                fontSize: "22px",
                fontStyle: "italic",
                color: "#444",
              }}
            >
              "{item.quote}"
            </p>

            <h3
              style={{
                textAlign: "right",
                marginTop: "15px",
                color: "#ff5722",
              }}
            >
              - {item.author}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quote;