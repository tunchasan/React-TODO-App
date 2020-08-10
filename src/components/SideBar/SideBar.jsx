import React from "react";
import "./SiderBar.css";
import { CollectionHolder } from "../index";

function SideBar() {
  return (
    <div className="sideBar_container">
      <CollectionHolder
        collectionTitle="Project"
        collectionItemTitles={["React", "CSS", "Javascript"]}
      />
    </div>
  );
}

export default SideBar;
