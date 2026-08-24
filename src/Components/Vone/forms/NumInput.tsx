import React from "react";

interface NumProps {
  name: string;
  type: string;
  onChange: any;
  disabled?: boolean;
  step: string;
}

const NumInput = React.forwardRef<HTMLInputElement, NumProps>((props, ref) => {
  const { name, type, onChange, disabled, step } = props;

  return (
    <div>
      <input name={name} type={type} step={step} ref={ref} />
      <label htmlFor={name}>{name}</label>
    </div>
  );
});

export default NumInput;
