import "./MenuItem.styles.scss";
import { useNavigate } from "react-router-dom";

interface IMenuItemProps {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
}

const MenuItem = ({
  title,
  imageUrl,
  size,
  linkUrl
}: IMenuItemProps): JSX.Element => {
  let navigate = useNavigate();
  const routeChange = (title:string) =>{ 
    let path = `/category/`+title; 
    navigate(path);
  } 
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => routeChange(title)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
