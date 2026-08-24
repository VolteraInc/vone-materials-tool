// import FormNova from "./forms/mainForm";
import { Loadmaterials_Nova } from "../Actions/Database/NovaMaterials";
import ActionButton from "../Actions/Buttons/ActionButtons";

const MatDisplay: React.FC = () => {
  const data = Loadmaterials_Nova().data;

  return (
    <div className="Main">
      <div>
        <ul>
          {data.map((val, key) => {
            return (
              <button type="button" key={key} className="row" onClick={() => {}}>
                <div id="name">{val}</div>
              </button>
            );
          })}
        </ul>

        <div
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="ActionButtons">
            <ActionButton
              name="Blank Template"
              hidden={false}
              onClick={() => {}}
            />
            <ActionButton
              name="Use Template"
              hidden={false}
              onClick={() => {}}
            />
            <ActionButton name="Update" hidden={false} />
            <ActionButton name="Delete" hidden={false} />
          </div>
        </div>
      </div>
      )
      <div>
        <button onClick={() => {}}>Back to Templates</button>
        {/* <mainForm materialProps={details}/>  */}
      </div>
    </div>
  );
};

export default MatDisplay;
