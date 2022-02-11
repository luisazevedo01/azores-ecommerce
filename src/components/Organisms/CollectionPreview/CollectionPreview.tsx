import { Fragment } from "react";
import CollectionItem from "../../Molecules/CollectionItem/CollectionItem";

import "./CollectionPreview.styles.scss";

interface ICollectionPreview {
  title: string;
  items: ICollectionItem[];
}

interface ICollectionItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

const CollectionPreview = ({
  title,
  items,
}: ICollectionPreview): JSX.Element => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item, index: number) => (
            <Fragment key={`collection_item_${index}`}>
              <CollectionItem {...item} />
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
