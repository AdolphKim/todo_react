import React from "react";
import styled from "styled-components";
import ButtonText from "../Atom/Button/ButtonText";

export interface Props {}
const Test = ({}: Props) => {
  return (
    <Container>
      <ButtonText onClick={() => {}}>안녕하세요</ButtonText>
    </Container>
  );
};

export default Test;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color["background"]};
`;
