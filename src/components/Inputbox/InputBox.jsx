import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

const InputBox = ({ label, placeholder, value, onChange, type = 'text' }) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-gray-700 text-sm poppins-light mb-2">{label}</label>}
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 pr-10"
        />
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none gap-3">
            <p>|</p>
          <IoIosArrowDown className="text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default InputBox;
