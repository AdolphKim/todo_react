import React from "react";
import styled from "styled-components";

export interface Props {
  disable?: boolean;
  placeholder: string;
}
const Input = ({ disable = false, placeholder }: Props) => {
  return <Container disabled={disable} placeholder={placeholder}></Container>;
};

export default Input;

const Container = styled.input`
  height: 20px;
  &::placeholder {
    text-align: center;
  }
`;
