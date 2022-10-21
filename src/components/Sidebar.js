import React from "react";
import styled from "styled-components";
import Switch from "./Switch";
import { ReactComponent as IconBoard } from "../images/icon-board.svg";
import { ReactComponent as IconHide } from "../images/icon-hide.svg";

import { StyledSidebar, Title, StyledLogo } from "./styles/Sidebar.styles.js";

const List = styled.ul`
  white-space: nowrap;
`;

const ListItem = styled.li`
  color: ${(props) => (props.active ? "#FFF" : props.theme.secondaryColor)};
  background: ${(props) => (props.active ? props.theme.accent : "none")};
  padding: 0.75rem 2rem;
  margin-right: 1.5rem;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const Button = styled.button`
  font-size: 1rem;
  color: ${(props) =>
    props.primary ? props.theme.accent : props.theme.secondaryColor};
`;

const StyledIconBoard = styled(IconBoard)`
  margin-right: 0.5rem;
  fill: ${(props) =>
    props.active
      ? "#FFF"
      : props.primary
      ? props.theme.accent
      : props.theme.secondaryColor};
`;

const Item = styled.span`
  display: ${(props) => (props.show ? "inline" : "none")};
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: 0.25s;
`;

const ListHeader = styled(Item)`
  display: inline-block;
  margin-bottom: 1.5rem;
  padding: 0 2rem;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: 0.25s;
  white-space: nowrap;
`;

function Sidebar({
  boardIds,
  boards,
  handleDialogOpen,
  handleToggle,
  handleSidebarOpen,
  openSidebar,
  activeBoardId,
  toggleBoard,
  theme,
}) {
  const isSidebarOpen = openSidebar ? true : false;
  return (
    <StyledSidebar open={isSidebarOpen}>
      <div>
        <StyledLogo />
        <Title show={isSidebarOpen}>Kanban</Title>
      </div>
      <div>
        <ListHeader as="h4" show={isSidebarOpen}>
          All boards ({boardIds.length})
        </ListHeader>
        <List>
          {boardIds.map((boardId, index) => {
            const board = boards[boardId];
            const isActive = boardId === activeBoardId;
            return (
              <ListItem
                key={boardId}
                id={boardId}
                index={index}
                active={isActive}
                onClick={() => toggleBoard(boardId)}
              >
                <StyledIconBoard active={isActive} />
                <Item show={isSidebarOpen}>{board.title}</Item>
              </ListItem>
            );
          })}
          <Button
            primary
            style={{ marginLeft: "1.6rem", marginTop: "1rem" }}
            onClick={() => handleDialogOpen("addBoard")}
          >
            <StyledIconBoard primary />
            <Item show={isSidebarOpen}>+ Create New Board</Item>
          </Button>
        </List>
      </div>
      <div>
        <Switch
          handleToggle={handleToggle}
          isSidebarOpen={isSidebarOpen}
          theme={theme}
        />
        <Button style={{ marginTop: ".5rem" }} onClick={handleSidebarOpen}>
          <IconHide /> <Item show={isSidebarOpen}>Hide Sidebar</Item>
        </Button>
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
