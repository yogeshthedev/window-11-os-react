import React, { useEffect, useState } from "react";
import "./Notes.css";

const Notes = () => {
  const [notepadContent, setnotepadContent] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("notepad");
    if (saved) {
      setnotepadContent(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notepad", notepadContent);
  }, [notepadContent]);

  return (
    <div className="notecontent">
      <div className="header-content">
        <pattern>File</pattern>
        <p>Edit</p>
        <p>View</p>
      </div>
      <div className="input-area">
        <textarea
          type="text"
          name="notepad-input"
          value={notepadContent}
          onChange={(e) => setnotepadContent(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Notes;
