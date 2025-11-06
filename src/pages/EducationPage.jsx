import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addEducation,
  deleteEducation,
  nextPage,
  previousPage,
} from "../components/resumeSlice";

export default function EducationPage() {
  const dispatch = useDispatch();
  const education = useSelector((state) => state.resume.education);
  const [courseName, setCourseName] = useState("");
  const [completionYear, setCompletionYear] = useState("");
  const [college, setCollege] = useState("");
  const [percentage, setPercentage] = useState("");
  const handleAdd = () => {
    dispatch(addEducation({ courseName, completionYear, college, percentage }));
    setCourseName("");
    setCompletionYear("");
    setCollege("");
    setPercentage("");
  };
  return (
    <div className="container">
      <h2>Education</h2>
      <input
        name="courseName"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        placeholder="Course Name"
      />
      <input
        name="completionYear"
        value={completionYear}
        onChange={(e) => setCompletionYear(e.target.value)}
        placeholder="Completion Year"
      />
      <input
        name="college"
        value={college}
        onChange={(e) => setCollege(e.target.value)}
        placeholder="College"
      />
      <input
        name="percentage"
        value={percentage}
        onChange={(e) => setPercentage(e.target.value)}
        placeholder="Percentage"
      />
      <button id="add_education" onClick={handleAdd}>
        Add Education
      </button>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            {edu.courseName} - {edu.college} ({edu.completionYear}){" "}
            <button
              id="delete"
              onClick={() => dispatch(deleteEducation(index))}
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
