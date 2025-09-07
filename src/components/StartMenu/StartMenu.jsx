import React, { useEffect, useRef } from "react";
import "./StartMenu.css";
import { gsap } from "gsap";
import { StartMenuPinnedApps } from "../../data/PinnedAppinStartMenu";
import { useDispatch, useSelector } from "react-redux";
import { togglepowerOption } from "../../redux/slices/uiSlice";

const StartMenu = () => {
  const powerOption = useSelector((state) => state.ui.powerOption);
  const dispatch = useDispatch();
  const menuRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      menuRef.current,
      {
        yPercent: 10,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power1.out",
        delay: 0.1,
      }
    );
  }, []);

  return (
    <div className="startmenu" ref={menuRef}>
      <div className="startmenu-container">
        <div className="main-content">
          <div className="pin-section">
            <div className="pin-top-btn">
              <h2>Pinned</h2>
              <button>
                <span>All apps</span>
              </button>
            </div>

            <div className="pin-apps-list">
              {StartMenuPinnedApps.map((item) => {
                return (
                  <div className="app">
                    <div className="icon">
                      <img src={item.icon} />
                    </div>
                    <p className="title">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="recommended-section">
            <h2>Recommended</h2>
            <div className="recommended-list">
              {StartMenuPinnedApps.slice(0, 6).map((item) => {
                return (
                  <div className="recommended-app">
                    <div className="icon">
                      <img src={item.icon} />
                    </div>
                    <p className="title">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr />
        <div className="profile-content">
          <div className="profile-ic-container">
            <div className="profile-icon">
              <img src="https://avatars.githubusercontent.com/u/168392069?v=4" />
            </div>
            <p className="profile-name">yogeshthedev</p>
          </div>
          <div
            className="power-btn"
            onClick={() => dispatch(togglepowerOption())}
          >
            <img src="/icon/ui/power.png" alt="" />
            {powerOption && (
              <div className="power-option">
                <div className="option">
                  <img src="/public/icon/lock.svg" />
                  <p>Lock</p>
                </div>
                <div className="option">
                  <img src="/public/icon/shut.svg" />
                  <p>Shut down</p>
                </div>

                <div className="option">
                  <img src="/public/icon/restart.svg" />
                  <p>Restart</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
