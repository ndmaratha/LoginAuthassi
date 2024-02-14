import React, { useEffect, useState } from 'react';
import useProduct from '../Custom/useProduct';

const Body = () => {
  const{product,loading}=useProduct();
  return (
    <div className="container mx-auto px-4 py-8">
      {loading ? (
        <div className="text-center text-gray-600">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {product.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-md overflow-hidden">
              <img src={item?.thumbnail} alt={item?.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item?.name}</h2>
                <p className="text-gray-600 mb-4">{item?.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-800 font-semibold">${item?.price}</span>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
