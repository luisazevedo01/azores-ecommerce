import { useState } from "react";

import FormInput from "../../Molecules/FormInput/FormInput";
import CustomButton from "../../Atoms/CustomButton/CustomButton";

import "./SignIn.styles.scss";

interface IFormInfo {
  email: string;
  password: string;
}

const initialState: IFormInfo = {
  email: "",
  password: "",
};

const SignIn = (): JSX.Element => {
  const [formInfo, setFormInfo] = useState<IFormInfo>(initialState);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log("submit");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    const updatedInfo = { ...formInfo, [name]: value };
    setFormInfo(updatedInfo);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          onChange={handleChange}
          value={formInfo.email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={formInfo.password}
          onChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton onClick={() => console.log("signIn")} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
