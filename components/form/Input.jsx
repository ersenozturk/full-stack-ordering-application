import React from "react";

const Input = ({ type, span, errorMessage, touched, ...eachInput }) => {
  return (
    <div className="w-full">
      <label htmlFor="" className="relative block cursor-text">
        <input
          type={type}
          className={`w-full h-14 border outline-none px-4 peer ${
            touched && errorMessage ? "border-red-800" : "border-primary"
          }`}
          required
          {...eachInput}
        />
        {type !== "datetime-local" ? (
          <span className="absolute top-0 left-0 px-4 text-sm h-full flex items-center transition-all delay-100 peer-focus:text-xs peer-focus:h-7 peer-valid:text-xs peer-valid:h-7">
            {span}
          </span>
        ) : (
          ""
        )}
      </label>
      {touched && <span className="text-xs text-red-800">{errorMessage}</span>}
    </div>
  );
};

export default Input;
