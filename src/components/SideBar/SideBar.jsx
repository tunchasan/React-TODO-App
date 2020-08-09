import React from "react";
import { CollectionTitle } from "../index";
import { Dehaze } from "@material-ui/icons";
import "./SiderBar.css";

function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBar-inner">
        <CollectionTitle title="Project" />
      </div>
      <div className="xx">
        <h1>Inbox</h1>
        <h1>Today</h1>
        <h1>Upcoming</h1>
        <h1>Mail</h1>
      </div>
    </div>
  );
}

export default SideBar;
