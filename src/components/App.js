import "./../styles/App.css";
import React from "react";
import { useSelector } from "react-redux";
import ProfilePage from "../pages/ProfilePage";
import EducationPage from "../pages/EducationPage";
import SkillsPage from "../pages/SkillPage";
import ProjectsPage from "../pages/ProjectPage";
import SocialMediaPage from "../pages/SocialMediaPage";
import ResumeOutput from "../pages/ResumeOutput";

export default function App() {
  const currentPage = useSelector((state) => state.resume.currentPage);
  switch (currentPage) {
    case 1:
      return <ProfilePage />;
    case 2:
      return <EducationPage />;
    case 3:
      return <SkillsPage />;
    case 4:
      return <ProjectsPage />;
    case 5:
      return <SocialMediaPage />;
    case 6:
      return <ResumeOutput />;
    default:
      return <ProfilePage />;
  }
}
