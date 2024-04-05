/**
 * The Input component in React renders an input field or textarea with label, type, placeholder, name,
 * registration, and error handling functionality.
 * @returns The `Input` component is being returned. It is a functional component that renders an input
 * field or a textarea based on the `type` prop passed to it. The component also handles error messages
 * if any are present.
 */
import React from "react";

function Input({ label, type, placeholder, name, register, errors }) {
  return (
    <React.Fragment>
      <div className="flex flex-col space-y-1">
        {errors && (
          <span className="text-xs text-red-600">{errors.message}</span>
        )}
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
        {type !== "textarea" ? (
          <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            className="w-full  py-2.5 px-4 border-b border-gray-300 focus:border-secondary text-sm outline-none"
            {...register}
          />
        ) : (
          <textarea
            name={name}
            id={name}
            placeholder={placeholder}
            rows="6"
            className="w-full rounded-md px-4 border text-sm pt-2.5 outline-secondary"
            {...register}
          ></textarea>
        )}
      </div>
    </React.Fragment>
  );
}

export default Input;
