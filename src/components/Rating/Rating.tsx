import React from "react";
import S from "./Rating.styles";

interface Props {
  score: string;
}

const Rating: React.FC<Props> = ({ score }) => {
  const percentage = (100 / 5) * +score;

  return (
    <S.Container aria-label={`${score} start out of 5`}>
      <S.Stars style={{ width: `${percentage}%` }} />
    </S.Container>
  );
};

export default Rating;
