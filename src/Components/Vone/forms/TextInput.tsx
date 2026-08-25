import React from "react";

interface TextProps {
  label: string;
  name: string;
  type: string;
  onChange?: (e: any) => void;
  disabled?: boolean;
  multiline?: boolean;
  value: any;
}

const TextInput = React.forwardRef<any, TextProps>((props, ref) => {
  const { name, type, onChange, disabled, label, multiline, value } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {multiline ? (
        <textarea
          name={name}
          ref={ref}
          rows={4}
          onChange={onChange}
          disabled={disabled}
          value={value}
        />
      ) : (
        <input
          name={name}
          type={type}
          ref={ref}
          onChange={onChange}
          disabled={disabled}
          value={value}
        />
      )}
    </div>
  );
});

export default TextInput;
