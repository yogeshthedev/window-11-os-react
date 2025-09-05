import React from "react";
import "./DesktopIcon.css";
import { useDispatch, useSelector } from "react-redux";
import { openWindow } from "../../redux/slices/windowSlice";

const DesktopIcon = ({ appName, label, icon, type }) => {
  const dispatch = useDispatch();
  const windows = useSelector((state) => state.window.windows);

  const handleDoubleClick = () => {
    const existing = windows.find((w) => w.app === appName);

    if (type === "folder") {
      return;
    }
    if (!existing) {
      dispatch(openWindow({ app: appName, icon, type }));
    } else {
      dispatch(focusWindow(existing.id));
    }
  };

  return (
    <div
      className="desktop-icon-lable"
      onClick={(e) => {
        e.stopPropagation();
      }}
      onDoubleClick={handleDoubleClick}
    >
      <div className="dt-icon">
        <img src={icon} alt={label} />
      </div>
      <p className="lable">{label}</p>
    </div>
  );
};

export default DesktopIcon;
