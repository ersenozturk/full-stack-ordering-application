import React from "react";

const Input = ({type,span}) => {
  return (
    <div className="w-full">
      <label htmlFor="" className="relative block cursor-text">
        <input
          type="{type}"
          className="w-full h-14 border border-primary outline-none px-4 peer"
          required
        />
        <span className="absolute top-0 left-0 px-4 text-sm h-full flex items-center transition-all delay-100 peer-focus:text-xs peer-focus:h-7 peer-valid:text-xs peer-valid:h-7">
          {span}
        </span>
      </label>
    </div>
  );
};

export default Input;
