import React, { useState } from "react";
import FormInput from "../../Molecules/FormInput/FormInput";
import CustomButton from "../../Atoms/CustomButton/CustomButton";
import "./SignUp.styles.scss";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface ISignUpInfo {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initalInfo: ISignUpInfo = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = (): JSX.Element => {
  const [signUpInfo, setSignUpInfo] = useState<ISignUpInfo>(initalInfo);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (signUpInfo.password !== signUpInfo.confirmPassword) {
      alert("passwords don't match");
      return;
    }
  };

  const handleChange = (event: ChangeEvent) => {
    const { name, value } = event.target;
    const updatedInfo = { ...signUpInfo, [name]: value };
    setSignUpInfo(updatedInfo);
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={signUpInfo.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={signUpInfo.email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={signUpInfo.password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={signUpInfo.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
