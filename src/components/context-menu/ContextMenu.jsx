import { useDispatch, useSelector } from "react-redux";
import "./ContextMenu.css";
import { useEffect } from "react";
import { closeMenu } from "../../redux/slices/contextMenuSlice";
import { toggleBackgroundImage } from "../../redux/slices/uiSlice";
import { createFolder } from "../../redux/slices/desktopSlice";

const ContextMenu = () => {
  const contextvisibe = useSelector((state) => state.contextMenu.visible);
  const contextoptions = useSelector((state) => state.contextMenu.options);
  const x = useSelector((state) => state.contextMenu.x);
  const y = useSelector((state) => state.contextMenu.y);
  const dispatch = useDispatch();

  const handleOptionClick = (option) => {
    if (option == "New Folder") {
      dispatch(createFolder());
    } else if (option == "Change Background") {
      dispatch(toggleBackgroundImage());
    } else if (option == "Change Icon Size") {
      console.log("Change Icon Size");
    }
    dispatch(closeMenu());
  };

  return (
    <div
      className="context-menu"
      style={
        contextvisibe
          ? {
              top: y,
              left: x,
              position: "absolute",
            }
          : { display: "none" }
      }
    >
      <ul className="container">
        {contextoptions.map((item, index) => {
          return (
            <li key={index} onClick={() => handleOptionClick(item)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContextMenu;
