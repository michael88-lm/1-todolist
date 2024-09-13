import { TasksType } from "./App";

type TodolistPropsType = {
  title: string;
  tasks: Array<TasksType>;
};

export const Todolist = (props: TodolistPropsType) => {
  props.tasks;

  return (
    <div className="Todolist">
      <h3>{props.title}</h3>
      <div>
        <input aria-label="#" type="text" />
        <button>+</button>
      </div>
      <ul>
        <li>
          <input type="checkbox" checked={true} aria-label="html" />{" "}
          <span>HTML&CSS</span>
        </li>
        <li>
          <input type="checkbox" checked={true} aria-label="JS" />{" "}
          <span>JS</span>
        </li>
        <li>
          <input type="checkbox" checked={false} aria-label="React" />{" "}
          <span>React</span>
        </li>
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
};
