import React from "react";
import Layout from "../../Components/Dashboard/Layout";
import Text from "../../Components/Text/Text";
import SubscriptionCard from "../../Components/Card/SubscriptionCard";
import subscriptions from "../../data/subscriptions";

function Mysubscription() {
  return (
    <Layout>
      <div className=" h-full overflow-scroll pt-12 pb-20">
        <Text className="text-2xl text-primary font-semibold">
          My Subscription
        </Text>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8 mt-6 max-sm:max-w-sm max-sm:mx-auto">
          {subscriptions.map((subscription) => (
            <SubscriptionCard key={subscription.id} {...subscription} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Mysubscription;
