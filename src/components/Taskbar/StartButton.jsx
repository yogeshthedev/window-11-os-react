import React from "react";
import SearchBar from "./SearchBar";
import { toggleStartMenu } from "../../redux/slices/uiSlice";
import { useDispatch } from "react-redux";
import PinnedApps from "./PinnedApps";

const StartButton = () => {
  const dispatch = useDispatch();
  return (
    <div className="start-center-side ">
      <div className="icon" onClick={() => dispatch(toggleStartMenu())}>
        {" "}
        <img src="/icon/home.png" alt="winodw 10 start button" />
      </div>
      <SearchBar />
      <PinnedApps/>
    </div>
  );
};

export default StartButton;
