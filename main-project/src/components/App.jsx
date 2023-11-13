import { Button, TextField, Alert, Paper, IconButton } from "@mui/material"
import { Delete } from '@mui/icons-material'
import { useTasks } from './App.useTasks'
import styled from '@emotion/styled'

const StyledTextField = styled(TextField)`
margin: 1rem;
background: #eee;
`;

const StyledButton = styled(Button)`
margin: 1rem;
background: #26FFE6;
color: black;
background-hover
`;

const StyledPaper = styled(Paper)`
list-style: none;
margin: 1rem;
background: #eee;
text-indent: 10px;
`;

const List = styled.ul `
padding: 0;
list-style: none;
`

export const App = () => {
const { tasks, remove, add, message } = useTasks()

const formSubmit = (event) => {
    event.preventDefault();
    const { target } = event;
    const data = new FormData(target);
    const { title } = Object.fromEntries(data);
    add(title)
    target.reset();
  };

  return (
    <div className="red-button">
      <form onSubmit={formSubmit}>
        <StyledTextField label="New Task" name="title" variant="filled"/>
        <StyledButton type="submit" size="large" variant="contained">SAVE</StyledButton>
      </form>

     {message && <Alert severity="warning">{message}</Alert>}


      <List>
        {tasks.map(({ id, title }) => {
          return (
           <StyledPaper key={id} component="li">
            <span>{title}</span>
            <IconButton size="small" onClick={() => remove(id)}>
              <Delete/>
            </IconButton>
            </StyledPaper>
          )
        })}
      </List>
    </div>
  );
};
