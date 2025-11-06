import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addProject,
  deleteProject,
  nextPage,
  previousPage,
} from "../components/resumeSlice";

export default function ProjectsPage() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.resume.projects);
  const [projectName, setProjectName] = useState("");
  const [techStack, setTechStack] = useState("");
  const [description, setDescription] = useState("");
  const handleAdd = () => {
    dispatch(addProject({ projectName, techStack, description }));
    setProjectName("");
    setTechStack("");
    setDescription("");
  };
  return (
    <div className="container">
      <h2>Projects</h2>
      <input
        name="projectName"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder="Project Name"
      />
      <input
        name="techStack"
        value={techStack}
        onChange={(e) => setTechStack(e.target.value)}
        placeholder="Tech Stack"
      />
      <input
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button id="add_project" onClick={handleAdd}>
        Add Project
      </button>
      <ul>
        {projects.map((p, index) => (
          <li key={index}>
            {p.projectName} ({p.techStack}): {p.description}{" "}
            <button id="delete" onClick={() => dispatch(deleteProject(index))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button id="back" onClick={() => dispatch(previousPage())}>
        Back
      </button>
      <button id="next" onClick={() => dispatch(nextPage())}>
        Next
      </button>
    </div>
  );
}
