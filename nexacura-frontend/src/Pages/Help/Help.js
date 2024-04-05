/**
 * The `Help` component renders a FAQ page with collapsible FAQ items using React state and components.
 * @returns The `Help` component is being returned, which contains a layout structure for a FAQ page.
 * Inside the `Help` component, there is a container with FAQ items displayed using the `FAQItem`
 * component. Each `FAQItem` consists of a question and an answer, and clicking on the question toggles
 * the visibility of the answer. The layout includes styling for the FAQ section with a title and
 */
import React, { useState } from "react";
import Layout from "../../Components/Dashboard/Layout";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Text from "../../Components/Text/Text";

function FAQItem({ question, answer }) {
  /* The line `const [isOpen, setIsOpen] = useState(false);` in the `FAQItem` component is using the
`useState` hook from React to create a state variable named `isOpen` and a function to update that
state named `setIsOpen`. */
  const [isOpen, setIsOpen] = useState(false);

  /**
   * The function `toggleOpen` toggles the value of `isOpen` variable.
   */
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-5">
      <details className="group">
        <summary
          className="flex cursor-pointer list-none items-center justify-between font-medium"
          onClick={toggleOpen}
        >
          <span>{question}</span>
          <span className="transition group-open:rotate-180">
            {/* The expression `{isOpen ? <FiChevronUp /> : <FiChevronDown />}` is a conditional
           rendering in JSX.  */}
            {isOpen ? <FiChevronUp /> : <FiChevronDown />}
          </span>
        </summary>
        <p
          className={`group-open:animate-fadeIn mt-3 text-neutral-600 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {answer}
        </p>
      </details>
    </div>
  );
}

function Help() {
  return (
    <Layout>
      <div className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
        <div className="mx-auto px-5">
          <div className="flex flex-col items-center">
            <Text className="text-2xl text-primary"> FAQ</Text>
            <Text className="mt-3 text-md text-neutral-500 md:text-lg">
              Frequently asked questions
            </Text>
          </div>
          <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            <FAQItem
              question="How does the billing work?"
              answer="Springerdata offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method."
            />
            <FAQItem
              question="Can I get a refund for my subscription?"
              answer="We offer a 30-day money-back guarantee for most of its subscription plans. If you are not satisfied with your subscription within the first 30 days, you can request a full refund. Refunds for subscriptions that have been active for longer than 30 days may be considered on a case-by-case basis."
            />
            {/* Other FAQItems */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Help;
