import React, { useEffect, useState } from "react";

import S from "./App.styles";
import Review from "./components/Review";
import Summary from "./components/Summary";
import { Review as IReview } from "./shared/types";

function App() {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/reviews`)
      .then((res) => res.json())
      .then((res) => setReviews(res.data));
  }, []);

  return (
    <S.Wrapper>
      <h1>The Minimalist Entrepreneur</h1>
      <Summary openModal={() => setModal(true)} reviews={reviews} />
      {modal && <div>modal</div>}
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </S.Wrapper>
  );
}

export default App;
