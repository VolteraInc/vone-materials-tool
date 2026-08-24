import Form from "./forms/mainForm";
import { useState } from "react";
import ActionButton from "../Actions/Buttons/ActionButtons";
import DisplayMaterials from "../Actions/Database/VoneMaterials";
import { Ink } from "@volterainc/utils-ink";
import defaultValue from "./defaultValue";
import "./VoneHome.scss";

const VoneHome: React.FC = () => {
  const [isformReady, setFormReady] = useState(false);
  const [selectedInk, setSelectedInk] = useState<Ink>(new Ink(defaultValue));

  return (
    <>
      {!isformReady ? (
        <div className="select-material-container">
          <div className="header">
            <h1 className="left">Select Material</h1>
          </div>
          <div className="display-materials">
            <DisplayMaterials
              parentCallback={(ink: any) => setSelectedInk(new Ink(ink))}
            />
          </div>
          <div className="button-container">
            <button
              className="standard-button"
              hidden={false}
              onClick={() => {
                setSelectedInk(new Ink(defaultValue));
                setFormReady(true);
              }}
            >
              Blank Template
              </button>
            <button
              className="standard-button"
              hidden={selectedInk.name === ""}
              onClick={() => setFormReady(true)}
            >
              Use : {selectedInk.name}
              </button>
          </div>
        </div>
      ) : (
        <div>
          <Form ink={selectedInk} />
        </div>
      )}
    </>
  );
};

export default VoneHome;
