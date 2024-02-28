import React from "react";

function Input({ label, type, placeholder, name }) {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      {type !== "textarea" ? (
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          className="w-full rounded-md py-2.5 px-4 border text-sm outline-secondary"
        />
      ) : (
        <textarea
          name={name}
          id={name}
          placeholder={placeholder}
          rows="6"
          className="w-full rounded-md px-4 border text-sm pt-2.5 outline-secondary"
        ></textarea>
      )}
    </div>
  );
}

export default Input;
