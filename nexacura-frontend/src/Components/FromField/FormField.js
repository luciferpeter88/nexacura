import React from "react";

function FormField({ label, placeholder, icon, type }) {
  return (
    <div className="space-y-2 font-sans-serif">
      <label className="mb-2 text-lg text-gray-500 block">{label}</label>
      <div className="relative flex items-center">
        {type === "textbox" ? (
          <textarea className="w-full h-56 outline-secondary bg-white border border-gray-400"></textarea>
        ) : (
          <React.Fragment>
            <input
              type="text"
              placeholder={placeholder}
              className="pr-4 pl-14 py-4 text-sm text-black rounded bg-white border border-gray-400 w-full outline-secondary"
            />
            <div className="absolute left-4 text-2xl text-secondary">
              {icon}
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default FormField;
