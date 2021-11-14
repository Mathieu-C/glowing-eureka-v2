import styled from "styled-components";

const Container = styled.article`
  align-items: center;
  display: flex;
  margin: 12px 0;
  flex-wrap: nowrap;
`;

const Content = styled.div`
  color: #858585;
  font-weight: 400;
  margin: 0;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  span {
    color: black;
    font-weight: 700;
  }
`;

const Styles = {
  Container,
  Content,
};

export default Styles;
