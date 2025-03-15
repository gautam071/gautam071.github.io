import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div 
        className="h-[500px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1618890334461-3774f0e8d66e?q=80&w=2940&auto=format&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Ganeshaa Sutra</h1>
            <p className="text-xl md:text-2xl">Where Every Thread Tells a Story of Quality</p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center text-[#332f2f] mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-[#332f2f]">20's OE</h3>
              <p className="text-gray-600">
                Premium quality 20's Open End yarn. Contact us for current pricing and availability.
              </p>
              <button
                onClick={() => navigate('/type1')}
                className="w-full bg-[#599c56] text-white py-2 px-4 rounded-md hover:bg-[#4a8347] transition-colors"
              >
                Click here
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-[#332f2f]">26's OE</h3>
              <p className="text-gray-600">
                Premium quality 26's Open End yarn. Contact us for current pricing and availability.
              </p>
              <button
                disabled
                className="w-full bg-gray-400 text-white py-2 px-4 rounded-md cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-[#332f2f]">10's OE</h3>
              <p className="text-gray-600">
                Premium quality 10's Open End yarn. Contact us for current pricing and availability.
              </p>
              <button
                disabled
                className="w-full bg-gray-400 text-white py-2 px-4 rounded-md cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;