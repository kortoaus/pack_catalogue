import React, { useState, useEffect } from "react";
import api from "./api";
import "./css/styles.css";
import { Header } from "./layout/Header";
import { Contents } from "./layout/Contents";
import { InfoDrawer } from "./components/InfoDrawer";

export const App = () => {
  const [packs, setPacks] = useState([]);
  const [drawer, setDrawer] = useState(false);

  const getPacks = async () => {
    console.log("render!");
    try {
      const { data } = await api.Packs.getPacks();
      setPacks(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPacks();
  }, []);

  return (
    <>
      <div className="MainWrap">
        <div className="MainInnerWrap">
          <Header />
          <Contents packs={packs} />
        </div>
        <div className="stickyBtn" onClick={() => setDrawer((prev) => !prev)}>
          How To Purchase
        </div>
      </div>
      <InfoDrawer open={drawer} close={setDrawer} />
    </>
  );
};
