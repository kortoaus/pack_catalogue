import React from "react";

const BasicBtn = ({ name, handler }) => {
  return (
    <div className="BasicBtn" onClick={handler}>
      {name}
    </div>
  );
};

export const ToolBar = ({ handler }) => {
  return (
    <div className="toolbarWrap">
      <BasicBtn name="All" handler={() => handler("")} />
      <BasicBtn name="Wagyu" handler={() => handler("Wagyu")} />
      <BasicBtn name="Black Angus" handler={() => handler("Black Angus")} />
      <BasicBtn name="Beef" handler={() => handler("Beef")} />
    </div>
  );
};
