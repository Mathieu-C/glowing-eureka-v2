import React, { useEffect, useState } from "react";
import { Review } from "../../shared/types";
import Button from "../Button";
import Rating from "../Rating";
import S from "./Summary.styles";

interface Props {
  openModal: Function;
  reviews: Review[];
}

const Summary: React.FC<Props> = ({ openModal, reviews }) => {
  const [average, setAverage] = useState("-");

  useEffect(() => {
    if (reviews.length === 0) return;

    const result =
      reviews.reduce((prev, current) => prev + +current.rating, 0) /
      reviews.length;

    setAverage(result.toFixed(2));
  }, [reviews]);

  return (
    <S.Container>
      <S.Rating>
        <S.Score>{average}</S.Score>
        <Rating score={average} />
      </S.Rating>
      <Button onClick={() => openModal()}>Add review</Button>
    </S.Container>
  );
};

export default Summary;
