
import React from "react";

const InputBox = ({
  title,
  type = "text",
  placeholder,
  unit,
  value,
  onChange,
  onBlur,
  name,
  rows,
  className = "",
  onFocus,
  error,
  touched,
}) => {
  const InputElement = rows ? "textarea" : "input";

  return (
    <div className="pt-3 sm:text-sm md:text-sm lg:text-base poppins-light bg-white">
      <div className="flex justify-between">
        <h5 className="poppins-light">
          {title} {unit && <span className="text-[#C00000]">({unit})</span>}
        </h5>
       
      </div>
      <div
        className={`w-full flex items-center mt-2 p-3 border border-gray-300 rounded-lg focus-within:border-custom-yellow bg-custom-white ${className}`}
      >
        <InputElement
          autoComplete="off"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          rows={rows}
          onFocus={onFocus}
          className="border-none outline-none w-full  text-xs  md:text-sm lg:text-sm xl:text-sm xxl:text-md "
        />
      </div>
      {touched && error && (
        <div className="text-red-500 mt-1 text-xs  md:text-sm lg:text-sm xl:text-sm xxl:text-md">{error}</div>
      )}
    </div>
  );
};

export default InputBox;

