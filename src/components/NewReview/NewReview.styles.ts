import styled from "styled-components";

const Container = styled.div`
  background: white;
  height: 100%;
  padding: 24px;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Form = styled.form``;

const Fieldset = styled.fieldset`
  border: 0;
  margin: 0;
  margin-bottom: 24px;
  padding: 0;

  legend {
    font-size: 24px;
    margin-bottom: 20px;
    padding: 0;
  }
`;

const Textarea = styled.textarea`
  border: 0;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  height: 100px;
  resize: none;
  width: 100%;
`;

const Label = styled.label`
  cursor: pointer;
  padding: 0 2px;

  i {
    background-image: url("star-full.svg");
    background-size: cover;
    display: block;
    height: 30px;
    width: 30px;
  }
`;

const Stars = styled.div`
  display: inline-flex;

  &:hover {
    & ~ .NewReview__label .NewReview__star {
      background-image: url("star-full.svg");
    }
  }
`;

const Input = styled.input`
  left: -9999px !important;
  position: absolute !important;

  &:checked,
  &:hover {
    & ~ .NewReview__label .NewReview__star {
      background-image: url("star.svg");
    }
  }
`;

const Errors = styled.ul`
  background: rgba(237, 65, 70, 0.1) none repeat scroll 0% 0%;
  border: 2px solid rgba(237, 66, 69, 0.5);
  border-radius: 8px;
  padding: 14px;

  &:empty {
    display: none;
  }

  li {
    list-style-type: none;
  }
`;

const Styles = {
  Container,
  Errors,
  Fieldset,
  Form,
  Input,
  Label,
  Stars,
  Textarea,
};

export default Styles;
