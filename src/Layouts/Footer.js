import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="p-2 bg-white sm:p-8 dark:bg-gray-800">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Link to="/" className="flex items-center">
            <img
              src="/assets/logo3.svg"
              className="mr-7 h-28"
              alt="FlowBite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-7 sm:gap-7 sm:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Տեսականի
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link to="/products" className="hover:underline">
                  Տեսականի
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Կապ մեր հետ
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link to="/contact" className="hover:underline ">
                  Կապ
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:underline"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Հաճախորդներ
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
            
              <li>
                <Link to="/clients" className="hover:underline">
                  Հաճախորդներ &amp; Գործընկերներ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Մեր Մասին
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link to="/about" className="hover:underline">
                  Մեր մասին
                </Link>
              </li>
           
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <Link to="https://flowbite.com/" className="hover:underline">
            Salik.am
          </Link>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <Link
            to="/"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <div className="flex pb-4 items-center">
            <div>
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-phone-call"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                <path d="M15 7a2 2 0 0 1 2 2" />
                <path d="M15 3a6 6 0 0 1 6 6" />
              </svg>
            </div>
            <p className="pl-2 text-white text-base">
              <a href="tel:+374776109" className="">
                +374 77 61 09
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
