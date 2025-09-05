import React from "react";
import "./Window.css";
import WindowHeader from "./WindowHeader";
import { useDispatch } from "react-redux";
import { focusWindow, moveResizeWindow } from "../../redux/slices/windowSlice";
import { Rnd } from "react-rnd";

const Window = ({ window }) => {
  const dispatch = useDispatch();

  return (
    !window.minimized && (
      <Rnd
        default={{
          x: window.x,
          y: window.y,
          width: 700,
          height: 300,
        }}
        position={{ x: window.x, y: window.y }}
        size={{ width: window.width || 700, height: window.height || 400 }}
        minWidth={200}
        minHeight={150}
        bounds="parent"
        dragHandleClassName="window-header"
        disableDragging={window.maximized || window.minimized}
        enableResizing={!window.maximized && !window.minimized}
        onDragStop={(e, d) => {
          dispatch(moveResizeWindow({ id: window.id, x: d.x, y: d.y }));
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          dispatch(
            moveResizeWindow({
              id: window.id,
              x: position.x,
              y: position.y,
              width: parseInt(ref.style.width, 10),
              height: parseInt(ref.style.height, 10),
            })
          );
        }}
        style={{ zIndex: window.zIndex }}
        className={`Window ${window.maximized ? "maximized" : ""} ${
          window.minimized ? "minimized" : ""
        }`}
        onClick={() => dispatch(focusWindow(window.id))}
      >
        <WindowHeader
          id={window.id}
          name={window.app}
          icon={window.icon}
          minimized={window.minimized}
          maximized={window.maximized}
        />

        <div className="window-content">
          <p>{window.app} content here</p>
        </div>
      </Rnd>
    )
  );
};

export default Window;
