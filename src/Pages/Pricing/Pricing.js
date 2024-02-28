import React from "react";
import Text from "../../Components/Text/Text";
import SubscriptionCard from "../../Components/Card/SubscriptionCard";
import subscriptions from "../../data/subscriptions";
import Footer from "../../Components/Footer/Footer";
import Faq from "../../Components/Faq/Faq";
import Review from "../../Components/Reviews/Review";
function Pricing() {
  return (
    <div>
      <div>
        <Text
          className="text-5xl text-center text-primary mt-24 mb-5"
          size="txtOpenSansBold50"
          htmlTag="h1"
        >
          Choose your plan
        </Text>
        <Text className="text-gray-500 text-lg text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </div>
      <div className="font-[sans-serif] text-[#333]">
        <div className="xl:px-32 px-10 mx-auto">
          <div className="text-center"></div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 mt-6 max-sm:max-w-sm max-sm:mx-auto">
            {subscriptions.map((subscription) => (
              <SubscriptionCard key={subscription.id} {...subscription} />
            ))}
          </div>
        </div>
      </div>
      <Text
        size="txtOpenSansBold50"
        className="lg:pl-0 text-left lg:text-center text-5xl text-primary mt-16 px-10"
      >
        Have a question ? Look here ...
      </Text>

      <Faq />
      <Review />
      <Footer />
    </div>
  );
}

export default Pricing;
