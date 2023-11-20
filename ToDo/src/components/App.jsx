import { Button, TextField, Alert, Paper, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useTransition, animated } from "@react-spring/web";

import { useTasks } from "./App.useTasks";
import styled from "@emotion/styled";

const StyledTextField = styled(TextField)`
  margin: 1rem;
  background: #eee;
  font-family: "Karla", sans-serif;
`;

const StyledButton = styled(Button)`
  margin: 1.5rem;
  background: #26ffe6;
  color: black;
  font-family: "Karla", sans-serif;
`;

const StyledPaper = styled(Paper)`
  list-style: none;
  margin: 1rem;
  background: #eee;
  text-indent: 10px;
  font-family: "Karla", sans-serif;
`;

const List = styled.ul`
  padding: 0;
  list-style: none;
`;

export const App = () => {
  const { tasks, remove, add, message } = useTasks();

  const list = useTransition(tasks, {
    from: { x: -200, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: 200, opacity: 0 },
  });

  const formSubmit = (event) => {
    event.preventDefault();
    const { target } = event;
    const data = new FormData(target);
    const { title } = Object.fromEntries(data);
    add(title);
    target.reset();
  };

  return (
    <>
      <div className="red-button">
        <form onSubmit={formSubmit}>
          <StyledTextField label="Enter New Task Here" name="title" variant="filled" />
          <StyledButton type="submit" size="large" variant="contained">
            SAVE
          </StyledButton>
        </form>

        {message && <Alert severity="warning">{message}</Alert>}

        <List>
          {list((style, { id, title } ) => {
            return (
              <animated.div key={IDBDatabase} style={style}>
                <StyledPaper component="li">
                  <span>{title}</span>
                  <IconButton size="small" onClick={() => remove(id)}>
                    <Delete />
                  </IconButton>
                </StyledPaper>
              </animated.div>
            );
          })}
        </List>
      </div>
    </>
  );
};
