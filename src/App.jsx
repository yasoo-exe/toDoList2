import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState } from "react";

export default function App() {
  const [projects, setProjects] = useState([
    {
      name: "household chores",
      toDos: [
        {
          title: "do the dishes",
          description: "none",
          priority: "high",
          dueDate: new Date().getDay(),
          completed: false,
        },
        {
          title: "clean my room",
          description: "study table",
          priority: "medium",
          dueDate: new Date().getDay(),
          completed: true,
        },
        {
          title: "wash my clothes",
          description: "university attire",
          priority: "low",
          dueDate: new Date().getDay(),
          completed: false,
        },
      ],
    },
    {
      name: "programming",
      toDos: [
        {
          title: "leetcode problem",
          description: "solve a problem from JavaScript30",
          priority: "high",
          dueDate: new Date().getDay(),
          completed: false,
        },
        {
          title: "finish the toDoList project",
          description: "develop UI and functionality",
          priority: "medium",
          dueDate: new Date().getDay(),
          completed: true,
        },
        {
          title: "share a twitter update",
          description: "an update on the coding journey",
          priority: "low",
          dueDate: new Date().getDay(),
          completed: false,
        },
      ],
    },
  ]);
  const [displayProject, setDisplayProject] = useState([]);

  function handleClick() {
    setDisplayProject(
      projects.find((project) => project.name === event.target.innerText).toDos
    );
  }

  function newProject() {}

  return (
    <>
      <Navbar
        projects={projects}
        handleClick={handleClick}
        newProject={newProject}
      />
      <Main displayProject={displayProject} />
    </>
  );
}
