import React from "react";
import Text from "../Text/Text";
import Testimonial from "../Card/Testimonial";
import reviews from "../../data/review";

/**
 * The Review component displays testimonials from clients. It renders a heading indicating
 * these are client testimonials, followed by a grid of Testimonial components.
 * Each Testimonial is populated with data from the `reviews` dataset, showing the client's
 * name, their review, and their rating.
 */
function Review() {
  return (
    <div>
      {/* Heading for the testimonials section */}
      <Text
        size="txtOpenSansBold50"
        className="lg:pl-0 text-left lg:text-center text-5xl text-primary mt-16 px-10 mb-20"
      >
        What our clients say
      </Text>
      {/* Grid layout for testimonials. Adjusts columns based on screen size for responsive design. */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-10 xl:px-32">
        {reviews.map((review) => (
          <Testimonial
            key={review.id} // Assuming each review has a unique 'id' for React keys.
            rating={review.ratings}
            name={review.name}
            review={review.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Review;
