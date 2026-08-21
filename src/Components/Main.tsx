import React from "react";
import "./Main.scss";
import { useState } from "react";
import NovaHome from "./Nova/NovaHome";
import VoneHome from "./Vone/VoneHome";
import Sidebar from "./SideNav/Sidebar";
import { JumboButton } from "@volterainc/ui-core";

enum Platform {
  NOVA = "NOVA",
  VONE = "Vone",
  NONE = "None",
}

const Main: React.FC = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <div className="Main">
        <Home />
      </div>
    </div>
  );
};

const Home = () => {
  const [platform, setPlatform] = useState<Platform>(Platform.NONE);

  switch (platform) {
    case "NOVA":
      return <NovaHome />;
    case "Vone":
      return <VoneHome />;
    // case "None":
    //   return <Main />;
  }
  return (
    <>
      <div className="header">
        <h1>Select Platform</h1>
      </div>
      <div className="hero-button-container">
        <JumboButton text="V-One" onClick={() => setPlatform(Platform.VONE)} />
        <JumboButton text="Nova" onClick={() => setPlatform(Platform.NOVA)} disabled={true} />
      </div>
    </>
  );
};
export default Main;
