import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  padding: 2rem;
`;

const Logo = styled.div`
  margin-bottom: 4rem;
`;

function Sidebar({ boardIds, boards }) {
  const handleClick = (evt) => {
    console.log(evt);
  };
  return (
    <Container>
      <Logo>Kanban</Logo>
      <ul>
        {boardIds.map((boardId, index) => {
          const board = boards[boardId];
          return (
            <li key={boardId} id={boardId} index={index}>
              {board.title}
            </li>
          );
        })}
      </ul>
      <Button handleClick={handleClick} text="Add New Board" />
    </Container>
  );
}

export default Sidebar;
