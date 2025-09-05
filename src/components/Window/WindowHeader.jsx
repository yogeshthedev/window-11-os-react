import React from "react";
import "./WindowHeader.css";
import { useDispatch } from "react-redux";
import {
  minimizeWindow,
  maximizeWindow,
  closeWindow,
} from "../../redux/slices/windowSlice";

const WindowHeader = ({ id, name,icon }) => {
  const dispatch = useDispatch();

  return (
    <div className="window-header">
     <div className="win-first">
      <img src={icon}  />
       <h1 className="window-header-title">{name}</h1>
     </div>
      <div className="window-actions-btn">
        <div
          className="ic-minimize"
          onClick={() => dispatch(minimizeWindow(id))}
        >
          <img src="/icon/ui/minimize.png" alt="minimize" />
        </div>
        <div
          className="ic-maximize"
          onClick={() => dispatch(maximizeWindow(id))}
        >
          <img src="/icon/ui/maximize.png" alt="maximize" />
        </div>
        <div className="ic-close" onClick={() => dispatch(closeWindow(id))}>
          <img src="/icon/ui/close.png" alt="close" />
        </div>
      </div>
    </div>
  );
};

export default WindowHeader;
