import React from "react";
import styled from "styled-components";
import { ReactComponent as IconLight } from "../images/icon-light.svg";
import { ReactComponent as IconDark } from "../images/icon-dark.svg";

const Container = styled.div`
  /*  display: flex;
  justify-content: center;
  align-items: center; */
  text-align: center;
  background: rgb(${({ theme }) => theme.colors.bg.secondary});
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
`;

const StyledSwitch = styled.label`
  position: relative;
  vertical-align: bottom;
  width: 60px;
  height: 34px;
  display: ${(props) => (props.show ? "inline-block" : "none")};
  opacity: ${(props) => (props.show ? 1 : 0)};
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  background-color: ${({ theme }) => theme.accent};
  ${Input}:checked + && {
    &:before {
      -webkit-transform: translateX(20px);
      -ms-transform: translateX(20px);
      transform: translateX(-20px);
    }
  }
  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 26px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

function Switch({ handleToggle, isSidebarOpen, theme }) {
  const isDarkTheme = theme === "dark" ? true : false;
  return (
    <Container>
      {!isSidebarOpen && (
        <>
          {theme === "light" && <IconLight onClick={handleToggle} />}
          {theme === "dark" && <IconDark onClick={handleToggle} />}
        </>
      )}
      {isSidebarOpen && (
        <>
          <IconLight />
          <StyledSwitch show={isSidebarOpen}>
            <Input
              type="checkbox"
              onClick={handleToggle}
              checked={!isDarkTheme}
            />
            <Slider></Slider>
          </StyledSwitch>
          <IconDark />
        </>
      )}
    </Container>
  );
}

export default Switch;
