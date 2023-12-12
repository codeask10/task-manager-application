import { React, useState,useEffect } from "react";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
const TaskItem = (props) => {
    const Status = [
      { value: "To Do", label: "To Do" },
      { value: "In Progress", label: "In Progress" },
      { value: "Completed", label: "Completed" },
    ];
    const PriorityLevel = [
      { value: "Low", label: "Low" },
      { value: "Medium", label: "Medium" },
      { value: "High", label: "High" },
    ];
  
    const { task } = props;
    const { id, title, description, dueDate, status, priorityLevel } = task;
  
    const [editTask, setEditTask] = useState({
      eid: id,
      etitle: title,
      edescription: description,
      estatus: status,
      edueDate: dueDate,
      epriorityLevel: priorityLevel,
    });
  
    const deleteTask = (id) => {
      console.log(id);
    };
  
    const handleChange = (e) => {
      console.log(e.target.value)
      setEditTask({...editTask,[e.target.name]:e.target.value})
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(editTask)
    };
  return (
    <>
      <div
        className="modal fade"
        id={`exampleModal${id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Task Update
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Box noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      name="etitle"
                      required
                      fullWidth
                      id="etitle"
                      onChange={handleChange}
                      value={editTask.etitle}
                      label="eTitle"
                      type="text"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="edescription"
                      onChange={handleChange}
                      value={editTask.edescription}
                      label="eDescription"
                      type="text"
                      name="edescription"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="edueDate"
                      onChange={handleChange}
                      value={editTask.edueDate}
                      label="eDueDate"
                      type="date"
                      name="edueDate"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="estatus"
                      name="estatus"
                      value={editTask.estatus}
                      fullWidth
                      placeholder="estatus"
                      select
                      onChange={handleChange}
                      label="eStatus"
                    >
                      {Status.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="epriorityLevel"
                      name="epriorityLevel"
                      onChange={handleChange}
                      value={editTask.epriorityLevel}
                      select
                      label="ePriority Level"
                      fullWidth
                    >
                      {PriorityLevel.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </Box>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary "
                onClick={handleSubmit}
                data-bs-dismiss="modal"
              >
                save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="right floated meta">
              <button
                className="circular ui icon button"
                data-bs-toggle="modal"
                data-bs-target={`#exampleModal${id}`}
              >
                <i className="edit icon black" />
              </button>
              <button
                className="circular ui icon button"
                onClick={() => deleteTask(id)}
              >
                <i className="trash icon black"></i>
              </button>
            </div>
            <div className="header">{title}</div>
            <div className="meta">{priorityLevel}</div>
            <div className="description">{description}</div>
          </div>
          <div className="extra content">
            <span className="right floated">
              <PendingActionsIcon />
              {dueDate}
            </span>
            <span>
              <i className="user icon"></i>
              {status}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
