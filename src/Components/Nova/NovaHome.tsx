// import { Loadmaterials_Nova } from "../Actions/Database/NovaMaterials";
import MatDisplay from "./MatDisplay";

const NovaHome: React.FC = () => {
  return (
    <div className="Main">
      <div>
        <h2 className="Title">Select Material</h2>
        <MatDisplay />
      </div>
    </div>
  );
};

export default NovaHome;
