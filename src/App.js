import React, { useState, useEffect } from "react";
import api from "./api";
import "./css/styles.css";
import { Header } from "./layout/Header";
import { Contents } from "./layout/Contents";

export const App = () => {
  const [packs, setPacks] = useState([]);

  const getPacks = async () => {
    try {
      const { data } = await api.Packs.getPacks();
      console.log(data);
      setPacks(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPacks();
  }, []);

  return (
    <div className="MainWrap">
      <div className="MainInnerWrap">
        <Header />
        <Contents packs={packs} />
      </div>
    </div>
  );
};
