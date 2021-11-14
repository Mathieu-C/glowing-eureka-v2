import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  background-image: url("star.svg");
  background-repeat: repeat-x;
  background-size: 30px;
  display: flex;
  flex-wrap: nowrap;
  height: 30px;
  margin-right: 18px;
  width: calc(5 * 30px);
`;

const Stars = styled.div`
  background-image: url("star-full.svg");
  background-repeat: repeat-x;
  background-size: 30px;
  display: inline-flex;
  height: 30px;
`;

const Styles = {
  Container,
  Stars,
};

export default Styles;
