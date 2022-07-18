import React, { useState, useEffect } from "react";

const DropDown = ({ content }) => {
  const [show, setShow] = useState(true);
  const [selectColor, setSelectColor] = useState("");
  const [selectWidth, setSelectWidth] = useState("");
  const [selectSize, setSelectSize] = useState("");

  function handleClick(item) {
    if (item.color) {
      setSelectColor(item.armName);
    } else if (item.viewSize) {
      setSelectSize(item.viewSize);
    } else {
      setSelectWidth(item);
    }
    setShow(false);
  }

  useEffect(() => {
    setShow(false);
  }, []);
  return (
    <div className="relative">
      <div
        className="bg-white dark:bg-gray-800 flex items-center justify-between border rounded border-gray-300 dark:border-gray-700 w-40 cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <p className="pl-3 py-3 text-gray-600 dark:text-gray-4000 text-sm leading-3 tracking-normal font-normal">
          {!selectColor && !selectWidth && !selectSize
            ? content.name
            : content.details[0].armName
            ? selectColor
            : content.details[0].viewSize
            ? selectSize
            : selectWidth + " սմ"}
        </p>
        <div className="cursor-pointer text-gray-600 dark:text-gray-400 mr-3">
          {show ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-up"
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
              <polyline points="6 15 12 9 18 15" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-up"
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
              <polyline points="6 9 12 15 18 9" />
            </svg>
          )}
        </div>
      </div>
      {show && (
        <ul className="visible transition duration-300 opacity-100 bg-white dark:bg-gray-800  shadow rounded mt-2 pb-1 w-40 absolute">
          {content.details.map((item, index) => (
            <li
              key={index}
              className={` cursor-pointer rounded-t text-sm flex  font-bold leading-3 tracking-normal hover:dark:bg-gray-700 pt-4 pb-3 mb-1  text-white px-3`}
            >
              <button
                className="w-full px-2 flex items-center justify-between"
                onClick={() => handleClick(item)}
              >
                <span className="font-medium">
                  {Number(item)
                    ? item + " սմ"
                    : item.armName
                    ? item.armName
                    : item.viewSize}
                </span>
                <div
                  className="w-8 h-8"
                  style={{ backgroundColor: item.color }}
                ></div>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default DropDown;
