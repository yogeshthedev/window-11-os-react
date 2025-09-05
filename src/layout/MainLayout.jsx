import React from "react";
import Desktop from "../components/Desktop/Desktop";
import Taskbar from "../components/Taskbar/Taskbar";
import "./MainLayout.css";
import { useSelector } from "react-redux";
import StartMenu from "./../components/StartMenu/StartMenu";

const MainLayout = () => {
  const startMenuOpen = useSelector((state) => state.ui.startMenuOpen);
  const theme = useSelector((state) => state.ui.theme);
  const brightness = useSelector((state) => state.ui.brightness);
  const nightLight = useSelector((state) => state.ui.nightLight);

  return (
    <>
      <div
        className={`mainlayout ${theme}`}
        style={{
          filter: `brightness(${brightness}%) ${
            nightLight ? "sepia(30%) hue-rotate(330deg) saturate(120%)" : ""
          }`,
        }}
      >
        <Desktop />
        <Taskbar />
        {startMenuOpen && <StartMenu />}
      </div>
    </>
  );
};

export default MainLayout;
