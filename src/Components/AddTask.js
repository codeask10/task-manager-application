import { React, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const defaultTheme = createTheme();

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "",
    dueDate:"",
    priorityLevel: "",
  });

  const status = [
    {
      value: "To Do",
      label: "To Do",
    },
    {
      value: "In Progress",
      label: "In Progress",
    },
    {
      value: "Completed",
      label: "Completed",
    },
  ];
  const priorityLevel = [
    {
      value: "Low",
      label: "Low",
    },
    {
      value: "Medium",
      label: "Medium",
    },
    {
      value: "High",
      label: "High",
    },
  ];
  const handleChange = (e) => {
    console.log(e.target.value);
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      title: data.get("title"),
      description: data.get("description"),
      dueDate: data.get("dueDate"),
      status: data.get("status"),
      priorityLevel: data.get("priorityLevel"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            <AddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Task
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  name="title"
                  required
                  fullWidth
                  id="title"
                  onChange={handleChange}
                  value={task.title}
                  label="Title"
                  type="text"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  onChange={handleChange}
                  value={task.description}
                  label="Description"
                  type="text"
                  name="description"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
              <TextField
                  required
                  fullWidth
                  id="dueDate"
                  onChange={handleChange}
                  value={task.dueDate}
                  label="DueDate"
                  type="date"
                  name="dueDate"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="status"
                  name="status"
                  value={task.status}
                  fullWidth
                  placeholder="status"
                  select
                  onChange={handleChange}
                  label="Status"
                  defaultValue=""
                >
                  {status.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="priorityLevel"
                  name="priorityLevel"
                  onChange={handleChange}
                  value={task.priorityLevel}
                  select
                  label="Priority Level"
                  defaultValue=""
                  fullWidth
                >
                  {priorityLevel.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add Task
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AddTask;
