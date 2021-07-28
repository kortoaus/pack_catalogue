import React, { useState } from "react";
import { ToolBar } from "./ToolBar";

export const Contents = ({ packs }) => {
  const [cat, setCat] = useState("");
  return (
    <>
      <ToolBar handler={setCat} />
      <div className="PacksWrap">
        {packs.map((p, index) => {
          if (p.origin.includes(cat)) {
            return (
              <div key={`pack${index}`}>
                <div className="thumb">
                  {p.thumbnail !== "" ? (
                    <img
                      src={`https://unclesbutchery.com/packs/thumb/${p.thumbnail}.webp`}
                      alt={p.name_en}
                    />
                  ) : null}
                </div>

                <div className="defaults">
                  <div className="names">
                    <div className="origin">
                      {p.origin} {p.mb ? ` / MB${p.mb}` : null}
                    </div>
                    <div className="en">{p.name_en}</div>
                    <div className="ko">{p.name_ko}</div>
                    <div className="cn">{p.name_cn}</div>
                  </div>
                  <div className="priceWrap">
                    <div className="price">
                      ${p.price}
                      <span className="unit">/kg</span>
                    </div>
                  </div>
                  <div className="weight">{`${p.w_min}kg ~ ${p.w_max}kg per Pack`}</div>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
};
