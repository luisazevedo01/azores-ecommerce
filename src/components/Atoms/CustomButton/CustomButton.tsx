import { ReactNode } from "react";
import "./CustomButton.styles.scss";

interface IButtonProps {
  children?: ReactNode;
  isGoogleSignIn?: boolean;
  [otherProps: string]: unknown;
}

const CustomButton = ({
  children,
  isGoogleSignIn,
  ...otherProps
}: IButtonProps): JSX.Element => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default CustomButton;
