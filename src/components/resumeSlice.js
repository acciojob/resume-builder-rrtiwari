
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: { fname: "", lname: "", phone: "", address: "", url: "" },
  education: [],
  skills: [],
  projects: [],
  socialMedia: [],
  currentPage: 1,
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setProfile(state, action) {
      state.profile = { ...state.profile, ...action.payload };
    },
    addEducation(state, action) {
      state.education.push(action.payload);
    },
    deleteEducation(state, action) {
      state.education.splice(action.payload, 1);
    },
    addSkill(state, action) {
      state.skills.push(action.payload);
    },
    deleteSkill(state, action) {
      state.skills.splice(action.payload, 1);
    },
    addProject(state, action) {
      state.projects.push(action.payload);
    },
    deleteProject(state, action) {
      state.projects.splice(action.payload, 1);
    },
    addSocialMedia(state, action) {
      state.socialMedia.push(action.payload);
    },
    deleteSocialMedia(state, action) {
      state.socialMedia.splice(action.payload, 1);
    },
    nextPage(state) {
      if (state.currentPage < 6) state.currentPage += 1;
    },
    previousPage(state) {
      if (state.currentPage > 1) state.currentPage -= 1;
    },
  },
});

export const {
  setProfile,
  addEducation,
  deleteEducation,
  addSkill,
  deleteSkill,
  addProject,
  deleteProject,
  addSocialMedia,
  deleteSocialMedia,
  nextPage,
  previousPage,
} = resumeSlice.actions;

export default resumeSlice.reducer;
