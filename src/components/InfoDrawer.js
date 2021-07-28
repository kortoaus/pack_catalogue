import { Drawer } from "@material-ui/core";
import phone from "../svgs/phone.svg";
import response from "../svgs/response.svg";
import delivery from "../svgs/delivery.svg";

import React from "react";

export const InfoDrawer = ({ open, close }) => {
  return (
    <Drawer anchor="bottom" open={open} onClose={() => close(false)}>
      <div className="infoWrap">
        <div className="infoInnerWrap">
          <div className="Btns">
            <div className="closeBtn" onClick={() => close(false)}>
              CLOSE
            </div>
          </div>

          <div className="title">Contacts</div>
          <div className="contact">
            <div className="cont">
              <div className="tag">English 🇦🇺</div>
              <div className="hours">9:00AM To 5:00PM</div>
              <div className="number">+61 449 611 653</div>
              <a href="tel://+61449611653">
                <div className="btn">Call Now</div>
              </a>
            </div>
            <div className="cont">
              <div className="tag">Korean 🇰🇷</div>
              <div className="hours">9:00AM To 5:00PM</div>
              <div className="number">+61 449 611 653</div>
              <a href="tel://+61449611653">
                <div className="btn">Call Now</div>
              </a>
            </div>
            <div className="cont">
              <div className="tag">Chinese 🇨🇳</div>
              <div className="hours">9:00AM To 5:00PM</div>
              <div className="number">+61 478 756 497</div>
              <a href="tel://+61478756497">
                <div className="btn">Call Now</div>
              </a>
            </div>
          </div>

          <div className="title">Processing</div>
          <div className="processing">
            <div className="pros">
              <div className="icon">
                <img src={phone} alt="phone" />
              </div>
              <div className="tag">Request Orders</div>
            </div>
            <div className="pros">
              <div className="icon">
                <img src={response} alt="response" />
              </div>
              <div className="tag">Get Weight and Total Price</div>
            </div>
            <div className="pros">
              <div className="icon">
                <img src={delivery} alt="delivery" />
              </div>
              <div className="tag">Delivery</div>
            </div>
          </div>

          <div className="title">Payments</div>
          <div className="payment">
            We only take <span>Bank Transfer</span> and{" "}
            <span>Cash on Delivery</span> at the moment.
          </div>
          <div className="acc">
            <div className="accInner">
              <div className="bank">Commonwealth Bank</div>
              <div className="name">UNITED MEAT CO</div>
              <div className="bsb">BSB: 062194</div>
              <div className="number">ACC: 10674717</div>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};
