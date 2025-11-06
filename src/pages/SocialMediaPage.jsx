import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addSocialMedia,
  deleteSocialMedia,
  nextPage,
  previousPage,
} from "../components/resumeSlice";

export default function SocialMediaPage() {
  const dispatch = useDispatch();
  const socialMedia = useSelector((state) => state.resume.socialMedia);
  const [link, setLink] = useState("");
  const handleAdd = () => {
    dispatch(addSocialMedia(link));
    setLink("");
  };
  return (
    <div className="container">
      <h2>Social Media</h2>
      <input
        name="Social"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Social Media Link"
      />
      <button id="add_social" onClick={handleAdd}>
        Add Social
      </button>
      <ul>
        {socialMedia.map((s, index) => (
          <li key={index}>
            {s}{" "}
            <button
              id="delete_social"
              onClick={() => dispatch(deleteSocialMedia(index))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button id="back" onClick={() => dispatch(previousPage())}>
        Back
      </button>
      <button id="save_continue" onClick={() => dispatch(nextPage())}>
        Save & Continue
      </button>
    </div>
  );
}
