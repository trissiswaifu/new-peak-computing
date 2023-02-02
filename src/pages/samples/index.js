import React from "react";
import { Layout } from "../../components/Layout";

const index = () => {
  return (
    <Layout>
      <main>
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-2xl font-bold text-gray-900">
            Product Samples
          </h1>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <img
                src="/sample-product-1.jpg"
                alt="Sample Product 1"
                className="w-full"
              />
              <div className="p-4">
                <h2 className="mb-2 text-xl font-bold">Sample Product 1</h2>
                <p className="text-base text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </div>
              <div className="bg-gray-100 px-4 py-2">
                <button className="focus:shadow-outline-blue rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none active:bg-blue-800">
                  Request Sample
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <img
                src="/sample-product-2.jpg"
                alt="Sample Product 2"
                className="w-full"
              />
              <div className="p-4">
                <h2 className="mb-2 text-xl font-bold">Sample Product 2</h2>
                <p className="text-base text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </div>
              <div className="bg-gray-100 px-4 py-2">
                <button className="focus:shadow-outline-blue rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none active:bg-blue-800">
                  Request Sample
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <img
                src="/sample-product-3.jpg"
                alt="Sample Product 3"
                className="w-full"
              />
              <div className="p-4">
                <h2 className="mb-2 text-xl font-bold">Sample Product 3</h2>
                <p className="text-base text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </div>
              <div className="bg-gray-100 px-4 py-2">
                <button className="focus:shadow-outline-blue rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none active:bg-blue-800">
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
