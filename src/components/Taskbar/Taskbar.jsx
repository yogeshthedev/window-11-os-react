import React from "react";
import "./Taskbar.css";
import StartButton from "./StartButton";
import SystemTray from "./SystemTray";
import NewsIcon from "./NewsIcon";
import { useDispatch } from "react-redux";

import { closeMenu } from "../../redux/slices/contextMenuSlice";

const Taskbar = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(closeMenu());
  };
  return (
    <div className=" taskbar" onClick={handleClick}>
      <div className="task-container">
        <NewsIcon />
        <StartButton />
        <SystemTray />
      </div>
    </div>
  );
};

export default Taskbar;
