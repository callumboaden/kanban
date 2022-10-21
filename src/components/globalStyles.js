import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: rgb(${({ theme }) => theme.colors.bg.body});
    font-family: 'Inter', sans-serif;
    transition: all 0.50s linear;
    color: ${({ theme }) => theme.primaryColor};
  }
  button {
    background: none;
    border: 0;
    font-family: 'Inter', sans-serif;

    :hover {
      cursor: pointer;
    }
  }
  h4 {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: .8rem;
    color: ${({ theme }) => theme.secondaryColor};
  }
  svg {
    display: inline-block;
    vertical-align: middle;
    fill: ${({ theme }) => theme.secondaryColor};
  }
`;
