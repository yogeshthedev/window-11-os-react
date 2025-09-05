import { useEffect, useState } from "react";
import "./SystemTray.css";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleHiddenItems,
  toggleSystemTray,
} from "../../redux/slices/uiSlice";
import SmallSystemOptions from "./SystemOptions/SmallSystemOptions";
import SystemOptions from "./SystemOptions/SystemOptions";

const SystemTray = () => {

  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const dt = new Date();

      let min = dt.getMinutes().toString().padStart(2, "0");
      let hour = dt.getHours();
      const period = hour >= 12 ? "PM" : "AM";
      hour = hour % 12 || 12;
      setTime(`${hour}:${min} ${period}`);

      let month = dt.getMonth() + 1;
      let day = dt.getDate();
      let year = dt.getFullYear();
      setDate(`${month}/${day}/${year}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  const hiddenItemValue = useSelector((state) => state.ui.toggleHiddenItems);
  const systemOptionValue = useSelector((state) => state.ui.toggleSystemTray);
  const dispatch = useDispatch();

  const handleSystemOption = () => {
    dispatch(toggleSystemTray());
  };

  return (
    <div className="system-tray-right-side" style={{ position: "relative" }}>
      <div className="arrow-icon" onClick={() => dispatch(toggleHiddenItems())}>
        {hiddenItemValue && <SmallSystemOptions />}
        <img className="arrowimg" src="/public/icon/arrow.svg" />
      </div>
      {systemOptionValue && <SystemOptions />}
      <div className="systems-icons" onClick={handleSystemOption}>
        <div className="ui-icon">
          <img src="/public/icon/ui/wifi.png" />
        </div>
        <div className="ui-icon">
          <img src="/public/icon/ui/audio3.png" />
        </div>
          <div className="ui-icon">
          <img src="/public/icon/ui/battery.png" />
        </div>
      </div>
      <div className="timeanddata">
        <div className="content">
          <p>{time}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default SystemTray;
