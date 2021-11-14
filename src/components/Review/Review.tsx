import React from "react";
import { Review as IReview } from "../../shared/types";
import Rating from "../Rating";

import S from "./Review.styles";

interface Props {
  review: IReview;
}

const Review: React.FC<Props> = ({ review }) => (
  <S.Container>
    <Rating score={review.rating} />
    <S.Content>
      <span>{review.rating}</span>, {review.body}
    </S.Content>
  </S.Container>
);

export default Review;
