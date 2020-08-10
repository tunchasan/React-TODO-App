import React from "react";
import "./SiderBar.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { CollectionHolder } from "../index";

function SideBar() {
  return (
    <div className="sideBar_container">
      <div className="addCollectionIcon_container">
        <div className="addCollectionIcon">
          <h1>+</h1>
        </div>
      </div>
      <CollectionHolder
        collectionTitle="Project"
        collectionItemTitles={["React", "CSS", "Javascript"]}
      />{" "}
      <CollectionHolder
        collectionTitle="Project"
        collectionItemTitles={["React", "CSS", "Javascript"]}
      />{" "}
      <CollectionHolder
        collectionTitle="Project"
        collectionItemTitles={["React", "CSS", "Javascript"]}
      />{" "}
      <CollectionHolder
        collectionTitle="Project"
        collectionItemTitles={["React", "CSS", "Javascript"]}
      />{" "}
      <CollectionHolder
        collectionTitle="Project"
        collectionItemTitles={["React", "CSS", "Javascript"]}
      />{" "}
      <CollectionHolder
        collectionTitle="Project"
        collectionItemTitles={["React", "CSS", "Javascript"]}
      />{" "}
      <CollectionHolder
        collectionTitle="Project"
        collectionItemTitles={["React", "CSS", "Javascript"]}
      />
    </div>
  );
}

export default SideBar;
