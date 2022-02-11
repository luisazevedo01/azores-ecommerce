import "./FormInput.styles.scss";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface IFormInput {
  handleChange: (e: ChangeEvent) => void;
  label: string;
  value: string | undefined;
  [otherProps: string]: any;
}

const FormInput = ({
  handleChange,
  label,
  value,
  ...otherProps
}: IFormInput) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
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
