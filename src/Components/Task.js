import { React, useState,useEffect } from "react";
import axios from 'axios';
import Grid from "@mui/material/Grid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TaskItem from "./TaskItem";

const Task = () => {

  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "",
    dueDate:"",
    priorityLevel: "",
  });
  useEffect(() => {
    getData()
  }, [])
  const getData=()=>{
    axios.get('https://localhost:7192/api/Task')
  .then(function (response) {
    setTask(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }
  return (
    <>
      <div className="ui container mt-4">
        <Grid container spacing={3}>
          {task.map((task) => (
            <Grid item key={task.id} xs={12} sm={6} md={4}>
             <TaskItem task={task}/>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Task;
