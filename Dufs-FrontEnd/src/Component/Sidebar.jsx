import React from "react";
import { Link } from "react-router-dom";

import SidebarItem from "./SidebarItem";

function Sidebar() {

  const menus = [
    { name: "대시보드", path: "/" },
    { name: "메뉴1", path: "/"}
  ];

  return (
    <div className="sidebar">
      {menus.map((menu, index) => {
        return (
          <Link to={menu.path} key={index}>
            <SidebarItem
              menu={menu}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;