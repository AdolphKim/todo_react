import React, { ReactChild } from "react";
import styled from "styled-components";

export interface Props {
  children: ReactChild;
}
const Title = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Title;

const Container = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.color["text"]};
`;
