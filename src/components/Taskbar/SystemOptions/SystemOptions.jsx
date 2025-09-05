import React, { useState } from "react";
import "./SystemOption.css";
import { useDispatch, useSelector } from "react-redux";
import { setBrightness, toggleNightLight, toggleTheme } from "../../../redux/slices/uiSlice";

const SystemOptions = () => {
 const brightness = useSelector((state) => state.ui.brightness);
  const [volume, setVolume] = useState(50);
  const themeValue = useSelector((state) => state.ui.theme);
  const nightValue = useSelector((state) => state.ui.nightLight);

  const dispatch = useDispatch();

  return (
    <div className="system-options">
      <div className="so-container">
        <div className="so-icon">
          <div className="so-img">
            <img src="/public/icon/ui/wifi.png" />
          </div>
          <p className="heading">WiFi</p>
        </div>
        <div className="so-icon">
          <div className="so-img">
            <img src="/public/icon/ui/bluetooth.png" />
          </div>
          <p className="heading">Bluetooth</p>
        </div>
        <div className="so-icon">
          <div className="so-img">
            <img src="/public/icon/ui/airplane.png" />
          </div>
          <p className="heading">Flight Mode</p>
        </div>
        <div className="so-icon">
          <div className="so-img">
            <img src="/public/icon/ui/saver.png" />
          </div>
          <p className="heading">Battery Saver</p>
        </div>
        <div className="so-icon">
          <div
            className="so-img"
            style={
              themeValue === "light" ? { backgroundColor: "#3386e4ff" } : {}
            }
            onClick={() => dispatch(toggleTheme())}
          >
            <img
              src={
                themeValue === "light"
                  ? "/public/icon/ui/moon.png"
                  : "/public/icon/ui/sun.png"
              }
            />
          </div>
          <p className="heading">Theme</p>
        </div>
        <div className="so-icon">
          <div className="so-img" style={
              nightValue  ? { backgroundColor: "#3386e4ff" } : {}
            } onClick={()=> dispatch(toggleNightLight())}>
            <img src="/public/icon/ui/nightlight.png" />
          </div>
          <p className="heading">Night Light</p>
        </div>
      </div>
      <div className="so-indicator">
        <div className="indi-icon">
          <img src="/public/icon/ui/brightness.png" />
          <input
            type="range"
            min="0"
            max="100"
            value={brightness}
            onChange={(e) => dispatch(setBrightness(Number(e.target.value)))}
            className="brightness-slider"
          />
          <span className="brightness-value">{brightness}%</span>
        </div>
        <div className="indi-icon">
          <img src="/public/icon/ui/audio3.png" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="volume-slider"
          />
          <span className="volume-value">{volume}%</span>
        </div>
      </div>
      <div className="battery"></div>
    </div>
  );
};

export default SystemOptions;
