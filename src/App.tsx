import React, { useEffect, useState } from "react";

import S from "./App.styles";
import NewReview from "./components/NewReview";
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

  useEffect(() => {
    const source = new EventSource(
      `${process.env.REACT_APP_API_ENDPOINT}/reviews/live`
    );

    source.addEventListener("created", function (event: any) {
      setReviews((current) => [...current, JSON.parse(event.data)]);
    });

    return () => source.close();
  }, []);

  return (
    <S.Wrapper>
      <h1>The Minimalist Entrepreneur</h1>
      <Summary openModal={() => setModal(true)} reviews={reviews} />
      {modal && <NewReview close={() => setModal(false)} />}
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </S.Wrapper>
  );
}

export default App;
