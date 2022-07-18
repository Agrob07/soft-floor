import React from "react";
import { Link } from "react-router-dom";

const ProductsList = () => {
  return (
    <div className="bg-gray-100 ">
      {/* Remove py-8 */}
      <div className="mx-auto container py-8">
        <div className="flex flex-wrap items-center lg:justify-between justify-center">
          {/* Card 1 */}
        <Link to= "/products/:id"> <div className="mx-2 w-72 lg:mb-0 mb-8">
            <div>
              <img
                src="https://cdn.27.ua/sc--media--prod/default/1f/ae/d1/1faed1c2-e401-4b94-8406-d28a663ff4a8.jpg"
                className="w-full h-44"
                alt=""
              />
            </div>
            <div className="bg-white">
              <div className="flex items-center justify-between px-4 pt-4">
                
                <div className="bg-green-800 py-1.5 px-6 rounded-full">
                  <p className="text-xs text-white-500">կանաչ</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center">
                  <h2 className="text-lg font-semibold">Ռետինե սալիկ</h2>
                  <p className="text-xs text-gray-600 pl-5">4 սմ</p>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                ռետինե սալիկները պատրաստված են էկոլոգիապես մաքուր կաուչուկից, որը ստացվել է վերամշակված ռետինե արտադրանքից:
                </p>
                <div className="flex mt-4">
                  <div>
                    <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                      ջերմամեկուսիչ
                    </p>
                  </div>
                  <div className="pl-2">
                    <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                     ջրակայուն
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4">
                  <h2 className="text-indigo-700 text-xs font-semibold">
                  Գին
                  </h2>
                  <h3 className="text-indigo-700 text-xl font-semibold">
                   11.450 դր
                  </h3>
                </div>
              </div>
            </div>
          </div>
          </Link>
          {/* Card 1 Ends */}
          {/* Card 2 */}
          <div className="mx-2 w-72 lg:mb-0 mb-8">
            <div>
              <img
                src="https://ecoprom.su/upload/shop_1/5/2/6/item_526/item_526.jpg"
                className="w-full h-44"
                alt=""
              />
            </div>
            <div className="bg-white">
              <div className="flex items-center justify-between px-4 pt-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-bookmark"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                  </svg>
                </div>
                <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                  <p className="text-xs text-yellow-500">Featured</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center">
                  <h2 className="text-lg font-semibold">iphone XS</h2>
                  <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  The Apple iPhone XS is available in 3 colors with 64GB memory.
                  Shoot amazing videos
                </p>
                <div className="flex mt-4">
                  <div>
                    <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                      12 months warranty
                    </p>
                  </div>
                  <div className="pl-2">
                    <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                      Complete box
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4">
                  <h2 className="text-indigo-700 text-xs font-semibold">
                    Bay Area, San Francisco
                  </h2>
                  <h3 className="text-indigo-700 text-xl font-semibold">
                    $350
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 Ends */}
          {/* Card 3  */}
          <div className="mx-2 w-72 lg:mb-0 mb-8">
            <div>
              <img
                src="https://ecoprom.su/upload/shop_1/5/2/8/item_528/item_528.jpg"
                className="w-full h-44"
                alt=""
              />
            </div>
            <div className="bg-white">
              <div className="flex items-center justify-between px-4 pt-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-bookmark"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                  </svg>
                </div>
                <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                  <p className="text-xs text-yellow-500">Featured</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center">
                  <h2 className="text-lg font-semibold">iphone XS</h2>
                  <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  The Apple iPhone XS is available in 3 colors with 64GB memory.
                  Shoot amazing videos
                </p>
                <div className="flex mt-4">
                  <div>
                    <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                      12 months warranty
                    </p>
                  </div>
                  <div className="pl-2">
                    <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                      Complete box
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4">
                  <h2 className="text-indigo-700 text-xs font-semibold">
                    Bay Area, San Francisco
                  </h2>
                  <h3 className="text-indigo-700 text-xl font-semibold">
                    $350
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 Ends */}
          {/* Card 4  */}
          <div className="w-72 mx-2 lg:mb-0 mb-8">
            <div>
              <img
                src="https://ecoprom.su/upload/shop_1/5/3/3/item_533/item_533.jpg"
                className="w-full h-44"
                alt=""
              />
            </div>
            <div className="bg-white">
              <div className="flex items-center justify-between px-4 pt-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-bookmark"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                  </svg>
                </div>
                <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                  <p className="text-xs text-yellow-500">Featured</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center">
                  <h2 className="text-lg font-semibold">iphone XS</h2>
                  <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  The Apple iPhone XS is available in 3 colors with 64GB memory.
                  Shoot amazing videos
                </p>
                <div className="flex mt-4">
                  <div>
                    <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                      12 months warranty
                    </p>
                  </div>
                  <div className="pl-2">
                    <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                      Complete box
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4">
                  <h2 className="text-indigo-700 text-xs font-semibold">
                    Bay Area, San Francisco
                  </h2>
                  <h3 className="text-indigo-700 text-xl font-semibold">
                    $350
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* Card 4 Ends */}
        </div>
        <div className="flex flex-wrap items-center lg:justify-between justify-center pb-10 mt-16">
          {/* Card 1 */}
          <div className="mx-2 w-72 lg:mb-0 mb-8">
            <div>
              <img
                src="https://ecoprom.su/upload/shop_1/5/3/1/item_531/item_531.jpg"
                className="w-full h-44"
                alt=""
              />
            </div>
            <div className="bg-white">
              <div className="flex items-center justify-between px-4 pt-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-bookmark"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                  </svg>
                </div>
                <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                  <p className="text-xs text-yellow-500">Featured</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center">
                  <h2 className="text-lg font-semibold">iphone XS</h2>
                  <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  The Apple iPhone XS is available in 3 colors with 64GB memory.
                  Shoot amazing videos
                </p>
                <div className="flex mt-4">
                  <div>
                    <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                      12 months warranty
                    </p>
                  </div>
                  <div className="pl-2">
                    <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                      Complete box
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4">
                  <h2 className="text-indigo-700 text-xs font-semibold">
                    Bay Area, San Francisco
                  </h2>
                  <h3 className="text-indigo-700 text-xl font-semibold">
                    $350
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* Card 1 Ends */}
          {/* Card 2 */}
          <div className="mx-2 w-72 lg:mb-0 mb-8">
            <div>
              <img
                src="https://ecoprom.su/upload/shop_1/5/2/7/item_527/item_527.jpg"
                className="w-full h-44"
                alt=""
              />
            </div>
            <div className="bg-white">
              <div className="flex items-center justify-between px-4 pt-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-bookmark"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                  </svg>
                </div>
                <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                  <p className="text-xs text-yellow-500">Featured</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center">
                  <h2 className="text-lg font-semibold">iphone XS</h2>
                  <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  The Apple iPhone XS is available in 3 colors with 64GB memory.
                  Shoot amazing videos
                </p>
                <div className="flex mt-4">
                  <div>
                    <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                      12 months warranty
                    </p>
                  </div>
                  <div className="pl-2">
                    <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                      Complete box
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4">
                  <h2 className="text-indigo-700 text-xs font-semibold">
                    Bay Area, San Francisco
                  </h2>
                  <h3 className="text-indigo-700 text-xl font-semibold">
                    $350
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 Ends */}
          {/* Card 3  */}
          <div className="mx-2 w-72 lg:mb-0 mb-8">
            <div>
              <img
                src="https://i.simpalsmedia.com/marketplace/products/original/df5ac9befb798b6106ee409e11b5b72e.jpg"
                className="w-full h-44"
                alt=""
              />
            </div>
            <div className="bg-white">
              <div className="flex items-center justify-between px-4 pt-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-bookmark"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                  </svg>
                </div>
                <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                  <p className="text-xs text-yellow-500">Featured</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center">
                  <h2 className="text-lg font-semibold">iphone XS</h2>
                  <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  The Apple iPhone XS is available in 3 colors with 64GB memory.
                  Shoot amazing videos
                </p>
                <div className="flex mt-4">
                  <div>
                    <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                      12 months warranty
                    </p>
                  </div>
                  <div className="pl-2">
                    <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                      Complete box
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4">
                  <h2 className="text-indigo-700 text-xs font-semibold">
                    Bay Area, San Francisco
                  </h2>
                  <h3 className="text-indigo-700 text-xl font-semibold">
                    $350
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 Ends */}
          {/* Card 4  */}
          <div className="mx-2 w-72 lg:mb-0 mb-8">
            <div>
              <img
                src="https://i.simpalsmedia.com/marketplace/products/original/89480ddfc0be5daf431c4f10fc393334.jpg"
                className="w-full h-44"
                alt=""
              />
            </div>
            <div className="bg-white">
              <div className="flex items-center justify-between px-4 pt-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-bookmark"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                  </svg>
                </div>
                <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                  <p className="text-xs text-yellow-500">Featured</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center">
                  <h2 className="text-lg font-semibold">iphone XS</h2>
                  <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  The Apple iPhone XS is available in 3 colors with 64GB memory.
                  Shoot amazing videos
                </p>
                <div className="flex mt-4">
                  <div>
                    <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                      12 months warranty
                    </p>
                  </div>
                  <div className="pl-2">
                    <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                      Complete box
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4">
                  <h2 className="text-indigo-700 text-xs font-semibold">
                    Bay Area, San Francisco
                  </h2>
                  <h3 className="text-indigo-700 text-xl font-semibold">
                    $350
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* Card 4 Ends */}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
