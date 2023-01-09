import React from "react";
import { Layout } from "../../components/Layout";

const index = () => {
  return (
    <Layout>
      <main>
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Samples
          </h1>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/sample-product-1.jpg"
                alt="Sample Product 1"
                className="w-full"
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">Sample Product 1</h2>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </div>
              <div className="px-4 py-2 bg-gray-100">
                <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                  Request Sample
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/sample-product-2.jpg"
                alt="Sample Product 2"
                className="w-full"
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">Sample Product 2</h2>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </div>
              <div className="px-4 py-2 bg-gray-100">
                <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                  Request Sample
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/sample-product-3.jpg"
                alt="Sample Product 3"
                className="w-full"
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">Sample Product 3</h2>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </div>
              <div className="px-4 py-2 bg-gray-100">
                <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                  Request Sample
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default index;
