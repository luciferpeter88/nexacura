/**
 * The Review component displays testimonials from clients with ratings, names, and reviews fetched
 * from a data source.
 * @returns The Review component is being returned, which consists of a section displaying client
 * reviews using the Testimonial component. The reviews are mapped over the data from the reviews
 * array, and for each review, a Testimonial component is rendered with the rating, name, and review
 * description passed as props.
 */
import React from "react";
import Text from "../Text/Text";
import Testimonial from "../Card/Testimonial";
import reviews from "../../data/review";

/* The `Review` function is a React component that renders a section displaying client reviews using
the `Testimonial` component. Here's a breakdown of what the function is doing: */
function Review() {
  return (
    <div>
      <Text
        size="txtOpenSansBold50"
        className="lg:pl-0 text-left lg:text-center text-5xl text-primary mt-16 px-10 mb-20"
      >
        What our clients say
      </Text>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-10 xl:px-32">
        {reviews.map((review) => {
          return (
            /* The `<Testimonial>` component is being rendered for each review in the `reviews` array.
           For each review, the `Testimonial` component is receiving props such as `rating`, `name`,
           and `review` which are being passed from the current review object in the `reviews`
           array. This allows the `Testimonial` component to display the specific rating, name, and
           review description for each client testimonial fetched from the data source. */
            <Testimonial
              rating={review.ratings}
              name={review.name}
              review={review.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Review;
