export const Todolist = () => {
  return (
    <div className="Todolist">
      <h3>What to learn</h3>
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
