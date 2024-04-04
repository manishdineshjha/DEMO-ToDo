import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, completeTask } from "../store/actions";

const TaskList = () => {
  const allTasks = useSelector((state) => state.allTasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleComplete = (taskId) => {
    dispatch(completeTask(taskId));
  };

  return (
    <>
      <div className="container my-4">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tasks</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allTasks.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center">No records</td>
              </tr>
            ) : (
              <>
                {allTasks.map((task, index) => (
                  <tr key={task.id}>
                    <th scope="row">{index + 1}</th>
                    <td
                      style={{
                        textDecoration: task.completed
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {task.text}
                    </td>
                    <td>{task.completed ?<><span className="text-success" style={{fontWeight:"600",fontSize:"18px"}}>COMPLETED</span> <i class="bi bi-hand-thumbs-up-fill mx-2" style={{color:"green"}}></i></> :<><span className="text-danger" style={{fontWeight:"600",fontSize:"18px"}}>NOT COMPLETED</span><i class="bi bi-hand-thumbs-down-fill mx-2" style={{color:"red"}}></i></>}</td>
                    <td>
                      {!task.completed && (
                        <>
                          <button
                            className="btn btn-success me-2"
                            onClick={() => handleComplete(task.id)}
                            title="Complete Task"
                          >Mark as Completed
                            <i className="bi bi-check-lg mx-2"></i>
                          </button>
                          <button
                            className="btn btn-danger "
                            onClick={() => handleDelete(task.id)}
                            title="Delete Task"
                          >Delete
                            <i className="bi bi-trash mx-2"></i>
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TaskList;
