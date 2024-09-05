import React, { useState } from "react";
import { FaShippingFast, FaUndo, FaStar } from "react-icons/fa";

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const productImages = [
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400/ff7f7f",
    "https://via.placeholder.com/400/77dd77",
    "https://via.placeholder.com/400/5f9ea0",
  ];

  const relatedProducts = [
    {
      id: 1,
      name: "Colorful DIY Kit",
      price: "$39.99",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTcwNjh8MHwxfGFsbHwxfHx8fHx8fHwxNjI3NDg0Mjcw&ixlib=rb-1.2.1&q=80&w=200",
    },
    {
      id: 2,
      name: "Creative DIY Set",
      price: "$59.99",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTcwNjh8MHwxfGFsbHwxfHx8fHx8fHwxNjI3NDg0Mjcw&ixlib=rb-1.2.1&q=80&w=200",
    },
    {
      id: 3,
      name: "Artistic DIY Kit",
      price: "$29.99",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTcwNjh8MHwxfGFsbHwxfHx8fHx8fHwxNjI3NDg0Mjcw&ixlib=rb-1.2.1&q=80&w=200",
    },
  ];

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 to-blue-300 flex flex-col items-center p-4">
      {/* Product Section */}
      <div className="bg-white shadow-xl rounded-lg overflow-hidden max-w-4xl w-full animate-fadeIn transition-all duration-500">
        {/* Product Image Gallery */}
        <div className="relative flex justify-center bg-gray-100 p-6">
          <div className="w-1/2 relative">
            <img
              src={productImages[currentImage]}
              alt="DIY Kit"
              className="rounded-lg object-cover w-full h-full transition-opacity duration-700 ease-in-out"
            />
            {/* Image Switch Buttons */}
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={prevImage}
                className="absolute left-0 bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-110"
              >
                Prev
              </button>
              <button
                onClick={nextImage}
                className="absolute right-0 bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-110"
              >
                Next
              </button>
            </div>
            {/* Image Dots Indicator */}
            <div className="flex space-x-2 justify-center mt-4">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full ${
                    currentImage === index ? "bg-blue-600" : "bg-gray-400"
                  }`}
                  onClick={() => setCurrentImage(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Vibrant DIY Kit
          </h1>
          <p className="text-gray-600 mt-4">
            Unleash your creativity with our vibrant and fun DIY kits! Perfect
            for all ages, these kits provide everything you need to create your
            own masterpiece at home.
          </p>

          <div className="mt-6 flex items-center space-x-4">
            <span className="text-2xl font-bold text-gray-800">$49.99</span>
            <div className="flex items-center text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transform transition-transform hover:scale-105">
              Add to Cart
            </button>
            <button className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 transform transition-transform hover:scale-105">
              Buy Now
            </button>
          </div>

          {/* Product Details */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Product Details
            </h2>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Includes all necessary materials</li>
              <li>Step-by-step instructions provided</li>
              <li>Suitable for ages 8 and above</li>
              <li>Perfect for creative projects at home</li>
            </ul>
          </div>

          {/* Shipping and Returns */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div>
              <FaShippingFast className="text-blue-500 inline mr-2" />
              <h2 className="text-xl font-bold text-gray-800">Shipping</h2>
              <p className="mt-2 text-gray-600">
                We offer free shipping on all orders over $50.
              </p>
            </div>
            <div>
              <FaUndo className="text-green-500 inline mr-2" />
              <h2 className="text-xl font-bold text-gray-800">Returns</h2>
              <p className="mt-2 text-gray-600">
                Returns are accepted within 30 days of purchase.
              </p>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Customer Reviews
            </h2>
            <p className="mt-2 text-gray-600">
              "I loved this DIY kit! It was so fun and easy to use, and the
              final product turned out great!" - Jane Doe
            </p>
          </div>

          {/* Related Products */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Related Products
            </h2>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {relatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-lg object-cover w-full mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{product.price}</p>
                  <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg w-full mt-4 hover:bg-blue-600 transform transition-transform hover:scale-105">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
