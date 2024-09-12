import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="todolist">
        <h3>What to buy</h3>
        <div>
          <input aria-label="#" type="text" />
          <button>+</button>
        </div>
        <ul>
          <li>
            <input id="html" type="checkbox" checked={true} aria-label="html" />{" "}
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
    </div>
  );
}

export default App;
