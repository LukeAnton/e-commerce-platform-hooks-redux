import React from "react";

import "./collectionItem.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  const imgStyle = { backgroundImage: `url(${imageUrl})` };
  return (
    <div className="collection-item">
      <div className="image" style={imgStyle} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
