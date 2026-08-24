import React from "react";
import "./Main.scss";
import { useState } from "react";
import NovaHome from "./Nova/NovaHome";
import VoneHome from "./Vone/VoneHome";
import Sidebar from "./SideNav/Sidebar";
import Header from "./Header/Header";
import { JumboButton } from "@volterainc/ui-core";
import NotFound from "./NotFound";

enum Platform {
  NOVA = "NOVA",
  VONE = "Vone",
  NONE = "None",
}

interface MainProps {
  notFound?: boolean;
}

const Main: React.FC<MainProps> = ({ notFound = false }) => {
  return (
    <div className="main">
      <Sidebar />
      <Header />
      <div className="main-container">
        {notFound ? <NotFound /> : <Home />}
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
