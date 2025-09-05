import React, { useEffect } from "react";
import "./Desktop.css";
import DesktopIcon from "./DesktopIcon";
import { useDispatch, useSelector } from "react-redux";

import WindowLayer from "../Window-Layer/WindowLayer";

import { closeMenu, openMenu } from "../../redux/slices/contextMenuSlice";
import ContextMenu from "../context-menu/ContextMenu";
import { backgrounds } from "./../../data/backgrounds";
import {
  closeHiddenItems,
  closeStartMenu,
  closeSystemTray,
} from "../../redux/slices/uiSlice";

const Desktop = () => {
  const icons = useSelector((state) => state.desktop.icons);
  const bgIndex = useSelector((state) => state.ui.backgroundIndex);
  const dispatch = useDispatch();

  const handlerRightClick = (e) => {
    e.preventDefault();
    dispatch(openMenu({ x: e.clientX, y: e.clientY }));
  };

  useEffect(() => {});
  const handleClick = () => {
    dispatch(closeStartMenu());
    dispatch(closeMenu());
    dispatch(closeSystemTray());
    dispatch(closeHiddenItems());
  };

  return (
    <div
      className="desktop"
      onContextMenu={(e) => handlerRightClick(e)}
      onClick={handleClick}
      style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
    >
      <ContextMenu />
      <WindowLayer />
      <div className="desktop-icons-container">
        {icons.map((app) => (
          <DesktopIcon
            key={app.id}
            appName={app.appName}
            label={app.label}
            icon={app.icon}
            type={app.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Desktop;
