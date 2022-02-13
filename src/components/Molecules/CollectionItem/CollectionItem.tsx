import "./CollectionItem.styles.scss";
import { useNavigate } from "react-router-dom";

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
 let navigate = useNavigate();
  const routeChange = (id:number) =>{ 
    let path = `/itemDetail/`+id; 
    navigate(path);
  } 
  return (
    <div
      onClick={() => routeChange(id)}
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
