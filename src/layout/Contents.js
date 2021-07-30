import React, { useState } from "react";
import { ToolBar } from "./ToolBar";

export const Contents = ({ packs }) => {
  const [cat, setCat] = useState("");
  const [search, setSearch] = useState("");

  const imgConvert = (fileno, original = false) => {
    let format = navigator.userAgent.indexOf("safari") ? "png" : "webp";
    let origin = original ? "origin" : "thumb";

    return `https://unclesbutchery.com/packs/${format}/${origin}/${fileno}.${format}`;
  };

  return (
    <>
      <ToolBar handler={setCat} search={setSearch} />
      <div className="PacksWrap">
        {packs.map((p, index) => {
          if (
            p.origin.includes(cat) &&
            p.name_en.toUpperCase().includes(search.toUpperCase())
          ) {
            return (
              <div key={`pack${index}`}>
                <div className="thumb">
                  {p.thumbnail !== "" ? (
                    <img src={imgConvert(p.thumbnail, false)} alt={p.name_en} />
                  ) : null}
                </div>

                <div className="defaults">
                  <div className="names">
                    <div className="weight">{p.brand}</div>

                    <div className="origin">
                      {p.origin} {p.mb ? ` / MB${p.mb}` : null}
                    </div>

                    <div className="en">{p.name_en}</div>
                    <div className="ko">{p.name_ko}</div>
                    <div className="cn">{p.name_cn}</div>
                    <div className="weight">{`${p.w_min}kg ~ ${p.w_max}kg per Pack`}</div>
                  </div>
                  <div className="priceWrap">
                    <div className="price">
                      ${p.price}
                      <span className="unit">/kg</span>
                    </div>
                    <div className="price approxp">
                      <div className="approx">Approx.</div>

                      <div>
                        ${(((p.w_min + p.w_max) / 2) * p.price).toFixed(0)}
                        <span className="unit">/pk</span>
                      </div>
                    </div>
                  </div>
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
