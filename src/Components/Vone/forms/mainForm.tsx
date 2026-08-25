import { useForm } from "react-hook-form";
import download from "../../Actions/download";
import { useState, useEffect } from "react";
import "./Inkform.scss";
import { InkSettingsControl } from "@volterainc/ui-ink";
import { Ink, alterInk } from "@volterainc/utils-ink";
import defaultValue from "../defaultValue";
import { createInkDefinition } from "../hydration";
import TextInput from "./TextInput";

export interface inkProps {
  ink: Ink;
}

const isUnknownExpirationDate = (useBy: string) => useBy.trim().toLowerCase() === "unknown";

const Form: React.FC<inkProps> = (props) => {
  const { reset, handleSubmit, register } = useForm({});
  const [newInk, setNewInk] = useState(new Ink(defaultValue));
  const expirationDateUnknown = isUnknownExpirationDate(newInk.useBy);

  useEffect(() => {
    reset({
      ...props.ink,
      useBy: isUnknownExpirationDate(props.ink.useBy) ? "" : props.ink.useBy,
    });
    setNewInk(props.ink);
    // Ignore empty dependency array since it is intentional.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = handleSubmit(() => {
    const formattedInk = createInkDefinition(newInk);
    const data = JSON.stringify(formattedInk);
    download(data, newInk.name + ".json", "text/plain");
  });

  const handleOnChange = (ink: Ink, path: string, value: number) => {
    setNewInk(alterInk(ink, path, value));
  };

  return (
    <>
      <div className="header">
        <h1>Ink Form</h1>
      </div>
      <div className="ink-form">
        <form onSubmit={onSubmit}>
          <div>
            <h2>Details</h2>
            <div className="vertical-selection-container">
              <TextInput
                label="Ink Type"
                name="type"
                type="text"
                ref={register({ required: true })}
                disabled={true}
                value={newInk.type} />

              <TextInput
                label="Name"
                name="name"
                type="text"
                ref={register({ required: true })}
                onChange={(e) => handleOnChange(newInk, "name", e.target.value)}
                value={newInk.name} />

              <TextInput
                label="Description"
                name="description"
                type="text"
                multiline={true}
                ref={register({ required: true })}
                onChange={(e) => handleOnChange(newInk, "description", e.target.value)}
                value={newInk.description} />

              <TextInput
                label="Expiration Date"
                name="useBy"
                type="date"
                ref={register({ required: true })}
                onChange={(e) => handleOnChange(newInk, "useBy", e.target.value)}
                value={expirationDateUnknown ? "" : newInk.useBy} />
              {expirationDateUnknown && (
                <p className="input-notice" role="status">
                  No expiration date is available.
                </p>
              )}
            </div>
          </div>
          <div className="ink-settings">
            <h2>Settings</h2>
            <InkSettingsControl
              ink={newInk}
              disabled={false}
              onChange={handleOnChange} />
          </div>
          <div className="right-button-container">
            <button
              className="standard-button"
              hidden={false}
              onClick={onSubmit}
            >
                Download JSON
            </button>
          </div>
        </form>
      </div>
    </>  
  );
};
export default Form;
