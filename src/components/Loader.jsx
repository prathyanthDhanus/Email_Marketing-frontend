import React from "react";

const Loader = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div
        className="loader border-t-2 rounded-full border-red-500 animate-spin
        aspect-square w-50 h-50 flex justify-center items-center text-[5rem]"
      >
       📩
      </div>
     
    </div>
  );
};

export default Loader;
