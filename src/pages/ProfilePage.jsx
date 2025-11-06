
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProfile, nextPage } from "../components/resumeSlice";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.resume.profile);
  const handleChange = (e) =>
    dispatch(setProfile({ [e.target.name]: e.target.value }));
  return (
    <div className="container">
      <h2>Profile</h2>
      <input
        name="fname"
        value={profile.fname}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        name="lname"
        value={profile.lname}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        name="phone"
        value={profile.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <input
        name="address"
        value={profile.address}
        onChange={handleChange}
        placeholder="Address"
      />
      <input
        name="url"
        value={profile.url}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <button id="next" onClick={() => dispatch(nextPage())}>
        Next
      </button>
    </div>
  );
}
