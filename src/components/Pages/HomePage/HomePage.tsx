import Directory from "../../Organisms/Directory/Directory";
import "./HomePage.styles.scss";

const HomePage = (): JSX.Element => {
  // useEffect(() => {
  //   if (!currentUser) window.location.replace("/signin");
  // }, []);

  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
