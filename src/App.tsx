import React from "react";
import "./App.css";
import { Todolist } from "./Todolist";

export type TasksType = {
  id: number;
  title: string;
  isDone: boolean;
};

function App() {
  // BLL:
  const todolistTitle_1 = "What to learn";
  const todolistTitle_2 = "What to buy";

  const tasks_1: Array<TasksType> = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS/TS", isDone: true },
    { id: 3, title: "React", isDone: false },
  ];

  const tasks_2: Array<TasksType> = [
    { id: 1, title: "Milk", isDone: false },
    { id: 2, title: "Bread", isDone: false },
    { id: 3, title: "Butter", isDone: false },
  ];

  return (
    <div className="App">
      <Todolist title={todolistTitle_1} tasks={tasks_1} />
      <Todolist title={todolistTitle_2} tasks={tasks_2} />

      {/*Todolist ({title="What to learn"}) */}
      {/*Todolist ({title="What to buy"}) */}
      {/* <div className="todolist">
        <h3>What to buy</h3>
        <div>
          <input aria-label="#" type="text" />
          <button>+</button>
        </div>
        <ul>
          <li>
            <input type="checkbox" checked={true} aria-label="Milk" />{" "}
            <span>HTML&CSS</span>
          </li>
          <li>
            <input type="checkbox" checked={true} aria-label="Bread" />{" "}
            <span>JS</span>
          </li>
          <li>
            <input type="checkbox" checked={false} aria-label="Butter" />{" "}
            <span>React</span>
          </li>
        </ul>
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </div> */}
    </div>
  );
}

export default App;
