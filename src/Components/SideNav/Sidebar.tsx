import React from "react";
import { useHistory } from "react-router-dom";
import "./_SideNav.scss";
import { SidebarData } from "./SidebarData";
import Logout from "../Authentication/Logout";

interface SidebarProps {
  open: boolean;
  onHomeClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onHomeClick }) => {
  const history = useHistory();

  return (
    <div className={`Sidebar${open ? "" : " hidden"}`}>
      <ul className="SidebarList">
        <div>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              onClick={() => {
                if (val.link === "/") {
                  onHomeClick();
                }
                history.push(val.link);
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
