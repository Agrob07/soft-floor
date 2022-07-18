import React, { useState } from "react";
import DropDown from "./Dropdown";
import { paletColors, paletWidth, paletSize } from "../data";
export default function SideBar() {
  const [show, setShow] = useState(null);
  return (
    <>
      <hr className=" border-gray-200  dark:border-gray-700 " />
      <div className="bg-gray-200 h-full w-full ">
        {/* Code block starts */}
        <nav className="w-full bg-gray-800 justify-items-end">
          <div className="container px-6 h-16 flex justify-between items-center lg:items-stretch justify-items-end mx-auto ">
            <div className="flex w-3/4  items-center">
              <ul className="flex w-full justify-evenly items-center h-full">
                <li className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-white tracking-normal transition duration-150 ease-in-out">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-grid"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x={4} y={4} width={6} height={6} rx={1} />
                      <rect x={14} y={4} width={6} height={6} rx={1} />
                      <rect x={4} y={14} width={6} height={6} rx={1} />
                      <rect x={14} y={14} width={6} height={6} rx={1} />
                    </svg>
                  </span>
                  <DropDown content={{ name: "Գույն", details: paletColors }} />
                </li>
                <li className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-white tracking-normal transition duration-150 ease-in-out ">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-puzzle"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                    </svg>
                  </span>
                  <DropDown content={{ name: "Չափ", details: paletWidth }} />
                </li>
                <li className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-white mr-10 tracking-normal transition duration-150 ease-in-out ">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-compass"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="8 16 10 10 16 8 14 14 8 16" />
                      <circle cx={12} cy={12} r={9} />
                    </svg>
                  </span>
                  <DropDown content={{ name: "Մակերես", details: paletSize }} />
                </li>

                <button
                  type="submit"
                  className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm leading-6"
                >
                  Հաստատել
                </button>
                <li className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-white tracking-normal transition duration-150 ease-in-out hidden">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-code"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="7 8 3 12 7 16" />
                      <polyline points="17 8 21 12 17 16" />
                      <line x1={14} y1={4} x2={10} y2={20} />
                    </svg>
                  </span>
                  Deliverables
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar */}

        {/* Sidebar ends */}
        {/* Code block ends */}
      </div>
    </>
  );
}
