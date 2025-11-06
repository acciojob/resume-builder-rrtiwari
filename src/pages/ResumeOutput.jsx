import React from "react";
import { useSelector } from "react-redux";

export default function ResumeOutput() {
  const { profile, education, skills, projects, socialMedia } = useSelector(
    (state) => state.resume
  );
  return (
    <div className="container">
      <h2>Resume Preview</h2>
      <h3>Profile</h3>
      <p>
        {profile.fname} {profile.lname}
      </p>
      <p>{profile.phone}</p>
      <p>{profile.address}</p>
      <img src={profile.url} alt="Profile" style={{ maxWidth: "150px" }} />
      <h3>Education</h3>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            {edu.courseName} - {edu.college} ({edu.completionYear}){" "}
            {edu.percentage}%
          </li>
        ))}
      </ul>
      <h3>Skills</h3>
      <ul>
        {skills.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ul>
      <h3>Projects</h3>
      <ul>
        {projects.map((p, index) => (
          <li key={index}>
            {p.projectName} ({p.techStack}): {p.description}
          </li>
        ))}
      </ul>
      <h3>Social Media</h3>
      <ul>
        {socialMedia.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
