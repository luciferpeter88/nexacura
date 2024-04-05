/**
 * The `FaqAnswers` component in React displays a list of FAQ items with expandable answers based on
 * user interaction.
 * @returns The `FaqAnswers` component is being returned. This component takes in a `data` prop, which
 * is an array of objects containing `key`, `question`, and `answer` properties. It maps over this data
 * array to render a list of FAQ items. Each FAQ item consists of a question and an answer, with a
 * toggle functionality to show/hide the answer when the question is clicked
 */
import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

function FaqAnswers({ data }) {
  /* The code snippet you provided is using React's `useState` hook to manage the state of the FAQ items
 being open or closed. */
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
              {isOpen[item.key] ? (
                <FaMinus className="text-secondary text-xl" />
              ) : (
                <FaPlus className="text-primary text-xl" />
              )}

              <h2
                className={`${
                  isOpen[item.key] ? "text-secondary" : "text-gray-500"
                } text-xl text-left`}
              >
                {item.question}
              </h2>
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
