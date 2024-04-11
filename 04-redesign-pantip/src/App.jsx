import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Topics from "./components/Topics/Topics";
import Highlight from "./components/Highlight/Highlight";
import Realtime from "./components/Realtime/Realtime";
import Ads from "./components/Ads/Ads";
import Content from "./components/Content/Content";

const App = () => {
  return (
    <>
      <div className="bg-[#3c3963]">
        <nav>
          <Navbar />
        </nav>
        <main>
          <Header />
          <Topics />
          <Highlight />
          <Realtime />
          <Ads />
          <Content />
        </main>
      </div>
    </>
  );
};

export default App;                         
