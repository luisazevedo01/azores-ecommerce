import "./MenuItem.styles.scss";

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
  linkUrl,
}: IMenuItemProps): JSX.Element => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => window.location.replace(`${linkUrl}`)}
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
