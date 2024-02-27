import "./Navbar.css";

function Navbar({ projects, handleClick, newProject }) {
  return (
    <nav>
      <h2>projects</h2>
      <button onClick={newProject}>+</button>
      {projects.map((project) => (
        <button onClick={handleClick}>{project.name}</button>
      ))}
    </nav>
  );
}

export default Navbar;
