import React from "react";
import { CollectionTitle, CollectionItem } from "../../index";
import "./CollectionHolder.css";

function CollectionHolder({ collectionTitle, collectionItemTitles }) {
  const renderCollectionItemTitles = () => {
    return collectionItemTitles.map((title) => (
      <CollectionItem title={title} />
    ));
  };

  return (
    <div className="collectionHolder_container">
      <CollectionTitle title={collectionTitle} />
      {renderCollectionItemTitles()}
    </div>
  );
}

export default CollectionHolder;
