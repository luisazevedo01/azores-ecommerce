import "./CollectionItem.styles.scss";

interface ICollectionItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}
const CollectionItem = ({
  id,
  name,
  price,
  imageUrl,
}: ICollectionItem): JSX.Element => {
  return (
    <div
      onClick={() => window.location.replace(`${id + name}`)}
      className="collection-item"
    >
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
