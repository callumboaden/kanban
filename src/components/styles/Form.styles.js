import styled from "styled-components";

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  width: 360px;
  padding: 1.25rem;
  background: ${({ theme }) => theme.background};

  & label {
    display: block;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    font-weight: 600;

    & ~ div {
      display: block;
      padding-bottom: 0.5rem;
    }
  }

  & input {
    width: 95%;
    display: inline-block;
    background: none;
    padding: 0.5rem;
    border: 1px solid rgba(${({ theme }) => theme.colors.text.primary} / 0.2);
    border-radius: 4px;
    color: ${({ theme }) => theme.primaryColor};
  }

  & select {
    display: block;
    width: 100%;
    background: none;
    padding: 0.5rem;
    border: 1px solid rgba(${({ theme }) => theme.colors.text.primary} / 0.2);
    border-radius: 4px;
    color: ${({ theme }) => theme.primaryColor};

    & option {
      background: ${({ theme }) => theme.background};
    }
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;

  .input-group {
    display: flex;
    align-items: center;

    input {
      margin-right: 0.5rem;
    }
  }

  .checkbox-group {
    padding: 0.8rem 0;
    margin-bottom: 0.5rem;
    background: rgb(${({ theme }) => theme.colors.bg.secondary});
    border-radius: 4px;

    input[type="checkbox"] {
      -webkit-appearance: none;
      background-color: none;
      border: 1px solid rgb(${({ theme }) => theme.colors.text.primary});
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
        inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
      border-radius: 3px;
      display: inline-block;
      position: relative;
      width: 10px;
      margin: 0 0.5rem;

      &:active {
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
          inset 0px 1px 3px rgba(0, 0, 0, 0.1);
      }

      &:checked {
        background-color: rgb(${({ theme }) => theme.colors.accent});
        border: 1px solid #adb8c0;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
          inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),
          inset 15px 10px -12px rgba(255, 255, 255, 0.1);
        color: #99a1a7;

        & + div {
          color: rgb(${({ theme }) => theme.colors.text.secondary});
          text-decoration: line-through;
        }
      }

      &:checked:after {
        content: "✔";
        font-size: 1rem;
        position: absolute;
        z-index: 10;
        top: -4px;
        left: 2px;
        color: #fff;
      }
    }

    div {
      margin-left: 0.25rem;
      font-size: 0.8rem;
    }
  }
`;
