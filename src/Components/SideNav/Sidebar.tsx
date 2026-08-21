import React from "react";
import "./_SideNav.scss";
import { SidebarData } from "./SidebarData";
import Logout from "../Authentication/Logout";

const Sidebar: React.FC = () => {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        <div>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
        </div>
        <div className="logout">
          <Logout icon="icon" title="title" />
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
