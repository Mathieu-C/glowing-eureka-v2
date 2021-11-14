import styled from "styled-components";

const Container = styled.section`
  align-items: center;
  border-bottom: 1px solid #b9b9b9;
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
`;

const Rating = styled.div`
  align-items: center;
  display: inline-flex;
`;

const Score = styled.div`
  font-size: 44px;
  margin-right: 22px;
`;

const Styles = {
  Container,
  Rating,
  Score,
};

export default Styles;
