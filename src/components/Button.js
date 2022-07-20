import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin: 0;
  display: inline-block;
`;

function Button({ text, handleClick }) {
  return <StyledButton onClick={handleClick}>{text}</StyledButton>;
}

export default Button;
