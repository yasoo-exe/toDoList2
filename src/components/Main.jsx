import "./Main.css";

function Main({ displayProject }) {
  return (
    <main>
      {displayProject.map((project) => (
        <div className="card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>{project.dueDate}</p>
          <p>{project.priority}</p>
          <p>{project.completed ? "done" : "not done"}</p>
        </div>
      ))}
    </main>
  );
}

export default Main;
