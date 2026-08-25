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
  sidebarOpen: boolean;
  onSidebarToggle: () => void;
}

const Main: React.FC<MainProps> = ({ notFound = false, sidebarOpen, onSidebarToggle }) => {
  const [homeVersion, setHomeVersion] = useState(0);

  return (
    <div className="main">
      <Sidebar open={sidebarOpen} onHomeClick={() => setHomeVersion((version) => version + 1)} />
      <Header onMenuClick={onSidebarToggle} />
      <div className={`main-container${sidebarOpen ? "" : " sidebar-hidden"}`}>
        {notFound ? <NotFound /> : <Home key={homeVersion} />}
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
