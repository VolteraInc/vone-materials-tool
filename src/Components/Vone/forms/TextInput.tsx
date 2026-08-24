import React from "react";

interface TextProps {
  label: string;
  name: string;
  type: string;
  onChange?: (e: any) => void;
  disabled?: boolean;
  value: any;
}

const TextInput = React.forwardRef<HTMLInputElement, TextProps>((props, ref) => {
  const { name, type, onChange, disabled, label, value } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        ref={ref}
        onChange={onChange}
        disabled={disabled}
        value={value}
      />
    </div>
  );
});

export default TextInput;
