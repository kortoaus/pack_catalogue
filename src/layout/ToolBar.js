import React from "react";

const BasicBtn = ({ name, handler }) => {
  return (
    <div className="BasicBtn" onClick={handler}>
      {name}
    </div>
  );
};

export const ToolBar = ({ handler, search }) => {
  return (
    <>
      <div className="toolbarWrap">
        <BasicBtn name="All" handler={() => handler("")} />
        <BasicBtn name="Wagyu" handler={() => handler("Wagyu")} />
        <BasicBtn name="Angus" handler={() => handler("Angus")} />
        <BasicBtn name="Beef" handler={() => handler("Beef")} />
      </div>
      <div className="searchWrap">
        <h1>Search Product</h1>
        <input
          type="text"
          placeholder="Search By Name"
          onChange={(e) => search(e.target.value)}
        ></input>
      </div>
    </>
  );
};
