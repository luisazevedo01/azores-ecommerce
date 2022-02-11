import "./FormInput.styles.scss";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface IFormInput {
  onChange: (e: ChangeEvent) => void;
  label: string;
  value: string | undefined;
  [otherProps: string]: any;
}

const FormInput = ({ onChange, label, value, ...otherProps }: IFormInput) => {
  return (
    <div className="group">
      <input className="form-input" onChange={onChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            typeof value === "string" ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
