import React, { useState } from "react";
import { ToolBar } from "./ToolBar";

export const Contents = ({ packs }) => {
  const [cat, setCat] = useState("");
  const [search, setSearch] = useState("");

  const imgConvert = (fileno, original = false) => {
    const format = navigator.userAgent.indexOf("safari") ? "png" : "webp";
    const origin = original ? "origin" : "thumb";

    const filename = fileno ? fileno : "0000";

    return `https://unclesbutchery.com/packs/${format}/${origin}/${filename}.${format}`;
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
              <div className="packCard" key={`pack${index}`}>
                {p.salePrice ? (
                  <div className="specialBadge">Special</div>
                ) : null}
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
                    {p.salePrice ? (
                      <div className="wasPrice">${p.price}/kg</div>
                    ) : null}
                    <div className="price">
                      ${p.salePrice ? p.salePrice : p.price}
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
