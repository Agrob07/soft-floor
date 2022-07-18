import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="sm:mx-auto sm:container px-6 xl:px-0">
        <div className="flex items-center justify-between md:flex-row flex-col py-11 space-y-6 md:space-y-0 w-full">
          <div className="hidden md:block">
            <img
              className="hidden xl:block w-full"
              src="https://i.ibb.co/ZcSmVGf/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png"
              alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1"
            />
            <img
              className="xl:hidden w-full"
              src="https://i.ibb.co/mBk8myg/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1.png"
              alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1"
            />
          </div>
          <div className="flex justify-center items-center flex-col xl:w-2/5 md:px-6 sm:w-3/4 md:w-2/4">
            <div className="">
              <h1 className="xl:text-4xl text-3xl font-semibold leading-9 text-gray-800">
                Գեղեցիկ, կրեատիվ, եզակի!
              </h1>
            </div>
            <div className="mt-4">
              <p className="xl:text-xl text-base leading-7 text-center text-gray-600">
                Furniture that looks modern and is comfortable as well. Avail
                the 50% offer now.
              </p>
            </div>
          </div>
          <div className="flex md:w-auto w-full justify-center flex-row space-x-4 md:space-x-0">
            <div className="w-full">
              <img
                className="hidden xl:block w-full"
                src="https://i.ibb.co/kg4KPBG/sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-1.png"
                alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1"
              />
              <img
                className="xl:hidden w-full"
                src="https://i.ibb.co/JjMcGH1/sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-1.png"
                alt="sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-1"
              />
            </div>
            <div className="md:hidden w-full">
              <img
                className="hidden xl:block w-full"
                src="https://i.ibb.co/ZcSmVGf/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png"
                alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1"
              />
              <img
                className="xl:hidden w-full"
                src="https://i.ibb.co/mBk8myg/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1.png"
                alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
          <div className="w-80 sm:w-auto flex flex-col justify-start items-start">
            <div>
              <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">
                Ոգեշնչում մեկ անկթարթում
              </p>
            </div>
            <div className="mt-4 lg:w-4/5 xl:w-3/5">
              <p className="text-base leading-6 text-gray-600">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="mt-16 w-full">
              <button
                className="px-4 bg-gray-900 flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-gray-700"
                onClick={() => navigate("/products")}
              >
                <p className="text-xl font-medium leading-5">Տեսականի</p>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66663 16H25.3333"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 21.3333L25.3333 16"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 10.6667L25.3333 16"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
            <div>
              <img
                className="hidden lg:block"
                src="https://i.ibb.co/61TfVVW/olena-sergienko-gx-KL334b-UK4-unsplash-1.png"
                alt="sofa"
              />
              <img
                className="w-80 sm:w-auto lg:hidden"
                src="https://i.ibb.co/QvxmJjB/olena-sergienko-gx-KL334b-UK4-unsplash-1-1.png"
                alt="sofa"
              />
            </div>
            <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-0 sm:space-y-5 lg:space-y-5 xl:space-y-8">
              <div>
                <img
                  className="hidden lg:block"
                  src="https://i.ibb.co/1MY5P3y/nirzar-pangarkar-Csw-Kf-D546-Z8-unsplash-1.png"
                  alt="chairs"
                />
                <img
                  className="w-80 sm:w-auto lg:hidden"
                  src="https://i.ibb.co/r0rvcCh/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1.png"
                  alt="chairs"
                />
              </div>
              <div>
                <img
                  className="hidden lg:block"
                  src="https://i.ibb.co/9N7ZX2C/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png"
                  alt="chairs"
                />
                <img
                  className="w-80 sm:w-auto lg:hidden"
                  src="https://i.ibb.co/0BFt400/nirzar-pangarkar-Csw-Kf-D546-Z8-unsplash-2.png"
                  alt="chairs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* part3 */}
      <div
        className="py-20 2xl:px-0 lg:px-12 px-4 2xl:mx-auto 2xl:container bg-gray-50"
        style={{ height: 750 }}
      >
        <div className="md:flex items-center justify-between w-full bg-gray-50">
          <div className="xl:w-1/3 md:w-1/2 w-full">
            <h1
              role="heading"
              className="focus:outline-none md:w-60 font-semibold md:text-4xl text-4xl leading-tight text-gray-800"
            >
              Հարմարավետություն
            </h1>
            <p
              role="contentinfo"
              className="focus:outline-none text-base leading-6 mt-8 text-gray-600 2xl:pr-24 xl:pr-0 pr-12"
            >
              Don’t get carried away with super-short paragraphs. The secret to
              one-sentence paragraphs is to use them like a spice: A pinch of
              cumin can make a meal more savor.
            </p>
          </div>
          <div className="xl:w-4/6 md:w-1/2 w-full xl:pl-48">
            <p
              role="contentinfo"
              className=" focus:outline-none text-base leading-6 mb-8 text-gray-600 md:mt-0 mt-10"
            >
              “Don’t get carried away with super-short paragraphs. The secret to
              one-sentence paragraphs is to use them like a spice: A pinch of
              cumin can make a meal more savory, but I don’t want to eat a
              plateful of the stuff.”
            </p>
            <div className="w-full">
              <img
                src="https://i.ibb.co/wMd2Q4B/new.png"
                alt="Purple flowers on a book"
                className="md:w-full sm:w-1/2 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
