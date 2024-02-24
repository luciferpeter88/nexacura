import React from "react";
import { FaPlus } from "react-icons/fa6";
function FaqAnswers({ data }) {
  const [isOpen, setIsOpen] = React.useState({});

  const toggleOpen = (id) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="flex flex-col gap-y-5 ">
      {data.map((item) => {
        return (
          <div key={item.key} className="flex flex-col gap-x-5">
            <div
              className="flex gap-x-5 items-center cursor-pointer"
              onClick={(e) => {
                e.stopPropagation(); // Stop event bubbling
                toggleOpen(item.key);
              }}
            >
              <FaPlus className="text-primary text-xl" />
              <h2 className="text-xl text-left">{item.question}</h2>
            </div>
            {isOpen[item.key] && (
              <p className="pl-10 text-black text-left">{item.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FaqAnswers;
