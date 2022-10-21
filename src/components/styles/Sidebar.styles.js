import styled from "styled-components";

import { ReactComponent as Logo } from "../../images/logo.svg";

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(${({ theme }) => theme.colors.bg.primary});
  min-width: ${(props) => (props.open ? "300px" : "0px")};
  width: ${(props) => (props.open ? "" : "90px")};
  transition: 0.25s;
  overflow: hidden;

  & > div:first-child {
    padding: 2rem;
    display: flex;
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    flex-grow: 1;
    margin: 0 2rem 2rem;
    white-space: nowrap;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-left: 0.5rem;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: 0.25s;
`;

export const StyledLogo = styled(Logo)`
  min-width: 30px;
`;
