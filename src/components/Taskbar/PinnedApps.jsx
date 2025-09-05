import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { minimizeWindow, openWindow } from "../../redux/slices/windowSlice";

const PinnedApps = () => {
  const icons = useSelector((state) => state.desktop.icons);
  const dispatch = useDispatch();
  const windows = useSelector((state) => state.window.windows);

  const handleSingleClick = (appName, icon) => {
    const existing = windows.find((w) => w.app === appName);
    if (existing) {
      if (existing.minimized) {
        dispatch(minimizeWindow(existing.id));
      }
    } else {
      dispatch(openWindow({ app: appName, icon }));
    }
  };

  const checkWindow = windows.map((item) => {
    console.log(item);

    return item.app;
  });

  return (
    <div className="pinned-apps">
      {icons.slice(0, 5).map((app) => (
        <div
          key={app.appName}
          className={`pin-app-icon icon ${
            checkWindow.includes(app.appName) ? "active" : ""
          }`}
          onClick={() => handleSingleClick(app.appName, app.icon)}
        >
          <img src={app.icon} alt={app.label} />
        </div>
      ))}
    </div>
  );
};

export default PinnedApps;
