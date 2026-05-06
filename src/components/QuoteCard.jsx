const QuoteCard = ({ quote, author }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
      <p className="text-xl italic text-gray-700">
        "{quote}"
      </p>

      <h3 className="mt-4 text-right text-lg font-semibold text-orange-500">
        - {author}
      </h3>
    </div>
  );
};

export default QuoteCard;