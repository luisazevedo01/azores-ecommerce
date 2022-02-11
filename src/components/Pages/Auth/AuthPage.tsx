import SignIn from "../../Organisms/SignIn/SignIn";
import SignUp from "../../Organisms/SignUp/SignUp";

import "./AuthPage.styles.scss";

const AuthPage = (): JSX.Element => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default AuthPage;
