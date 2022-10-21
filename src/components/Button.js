import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin: 0;
  display: inline-block;
  background: ${(props) =>
    props.primary
      ? props.theme.accent
      : props.secondary
      ? props.theme.buttonBgColor
      : "none"};
  padding: 0.75rem 2rem;
  color: ${(props) =>
    props.primary
      ? "#FFFFFF"
      : props.secondary
      ? props.theme.buttonTextColor
      : props.theme.text};
  border-radius: 25px;
  width: ${(props) => props.fullWidth && "100%"};
  font-weight: 600;
  font-size: 0.8rem;
`;

function Button({ text, handleClick, primary, secondary, fullWidth }) {
  return (
    <StyledButton
      onClick={handleClick}
      primary={primary}
      secondary={secondary}
      fullWidth={fullWidth}
    >
      {text}
    </StyledButton>
  );
}

export default Button;
