import { useState } from "react";
import articles from "./data/articles";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {

  const [newTask, setNewTask] = useState('');


  return (
    <>
      <h1 className="text-center ">My Articles</h1>

      <div className="container">
        <p>{newTask}</p>

        <form onSubmit={(e) => {
          e.preventDefault();
          console.log(newTask);
        }}>
          <div className="mb-3 d-flex align-items-center ">
            <input
              type="text"
              className="form-control"
              name="new_list"
              id="new_list"
              aria-describedby="task_helper"
              placeholder="LearnMyList"
              value={newTask}
              onChange={e => setNewTask(e.target.value)}
            />
            <button id="task_helper" className="btn btn-primary">
              submit
            </button>
          </div>
        </form>



      </div>
    </>
  )
}

