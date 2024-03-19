import React, { FC } from "react";
import "./sideNav.css";

export const SideNav: FC<{ children: React.ReactNode,openNav:boolean }> = (props) => {
  return (
    <nav id="sidebar" className={props.openNav===true? "active":""}>
      <div className="sidebar-header">{props.children}</div>
    </nav>
  );
};
