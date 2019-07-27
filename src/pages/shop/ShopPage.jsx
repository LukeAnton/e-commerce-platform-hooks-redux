import React, { useState } from "react";

import SHOP_DATA from "./SHOP_DATA";

import PreviewCollection from "../../components/previewCollection/PreviewCollection";

const ShopPage = props => {
  // eslint-disable-next-line
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
