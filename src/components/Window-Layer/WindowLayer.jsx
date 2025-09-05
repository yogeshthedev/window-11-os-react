import React from "react";
import { useSelector } from "react-redux";
import Window from "../Window/Window";
import "./WindowLayer.css";

const WindowLayer = () => {
  const windows = useSelector((state) => state.window.windows);

  const renderwindow = windows.map((window) => (
    <Window key={window.id} window={window} />
  ));
  return <div className="windows-layer">{renderwindow}</div>;
};

export default WindowLayer;
