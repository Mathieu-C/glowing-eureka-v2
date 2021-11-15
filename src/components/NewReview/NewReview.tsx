import React, { useState } from "react";
import Button from "../Button";

import S from "./NewReview.styles";

interface FieldProps {
  checked?: boolean;
  handleChange: Function;
  value: number;
}

const Field: React.FC<FieldProps> = ({ checked, handleChange, value }) => (
  <>
    <S.Label
      aria-label={`${value} star`}
      htmlFor={`rating-${value}`}
      className="NewReview__label"
    >
      <i className="NewReview__star"></i>
    </S.Label>
    <S.Input
      defaultChecked={checked}
      id={`rating-${value}`}
      name="rating"
      type="radio"
      value={value}
      onChange={() => handleChange()}
    />
  </>
);

interface NewReviewProps {
  close: Function;
}

const NewReview: React.FC<NewReviewProps> = ({ close }) => {
  const ratings = [1, 2, 3, 4, 5];

  const [rating, setRating] = useState(3);
  const [body, setBody] = useState("");

  const [errors, setErrors] = useState([]);

  const handleSubmit = () => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/reviews`, {
      method: "POST",
      body: JSON.stringify({ rating, body }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "SUCCESS") {
          close();
        } else {
          setErrors(data.errors);
        }
      });
  };

  return (
    <S.Container>
      <h2>What&apos;s your rating?</h2>
      <S.Form
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <S.Fieldset>
          <legend>Rating</legend>
          <S.Stars>
            {ratings.map((item) => (
              <Field
                checked={item === rating}
                handleChange={() => setRating(item)}
                key={item}
                value={item}
              />
            ))}
          </S.Stars>
        </S.Fieldset>
        <S.Fieldset>
          <legend>Review</legend>
          <S.Textarea
            name="body"
            placeholder="Start typing…"
            value={body}
            onChange={(e) => setBody(e.currentTarget.value)}
            required
          />
        </S.Fieldset>
        <S.Errors>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </S.Errors>
        <Button type="submit">Submit review</Button>
      </S.Form>
    </S.Container>
  );
};

export default NewReview;
