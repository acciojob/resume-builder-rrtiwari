
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addSkill,
  deleteSkill,
  nextPage,
  previousPage,
} from "../components/resumeSlice";

export default function SkillsPage() {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.resume.skills);
  const [skill, setSkill] = useState("");
  const handleAdd = () => {
    dispatch(addSkill(skill));
    setSkill("");
  };
  return (
    <div className="container">
      <h2>Skills</h2>
      <input
        name="skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        placeholder="Skill"
      />
      <button id="add_skill" onClick={handleAdd}>
        Add Skill
      </button>
      <ul>
        {skills.map((s, index) => (
          <li key={index}>
            {s}{" "}
            <button
              id="delete_skill"
              onClick={() => dispatch(deleteSkill(index))}
            >
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
