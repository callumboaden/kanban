import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-left: 1px solid #000;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid #000;
  background: rgb(${({ theme }) => theme.colors.bg.primary});
`;

export const Main = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  padding: 2rem;
  height: 100%;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  button {
    min-width: 300px;
    margin-top: 3.3rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: rgb(${({ theme }) => theme.colors.text.secondary});
    background: rgba(${({ theme }) => theme.colors.bg.secondary} / 0.5);
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;
