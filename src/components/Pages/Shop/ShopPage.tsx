import { Fragment, useState } from "react";

import SHOP_DATA from "../../../mocks/shop_data";
import CollectionPreview from "../../Organisms/CollectionPreview/CollectionPreview";

const ShopPage = () => {
  const [collections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map((item, idx) => (
        <Fragment key={`collection_preview_${idx}`}>
          <CollectionPreview {...item} />
        </Fragment>
      ))}
    </div>
  );
};

export default ShopPage;
