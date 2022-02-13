import { useNavigate } from "react-router-dom";
import "../CustomCategoryLink/CustomCtgLink.styles.scss";

interface ICustomCategoryLinkProps{
    title:string;
}

const CustomCategoryLink = ({title}:ICustomCategoryLinkProps): JSX.Element => {
    const navigate = useNavigate();

    const onLinkClick = (title:string) => {
        navigate("/category/"+title);
        console.log(title);
    }

    return(
        <div className="categoryLink">
            <p className="link" onClick={() => onLinkClick(title)}>See more</p>
        </div>
    )
  };
  
  export default CustomCategoryLink;