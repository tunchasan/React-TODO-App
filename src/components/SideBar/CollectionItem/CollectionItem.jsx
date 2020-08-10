import React from "react";
import { Dehaze } from "@material-ui/icons";
import "./CollectionItem.css";

function CollectionItem({ title }) {
  return (
    <div className="collectionItem_container">
      <Dehaze className="collectionItem_icon" />
      <p className="collectionItem_title">{title}</p>
    </div>
  );
}

export default CollectionItem;
