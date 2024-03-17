import React from "react";
import { Container } from "react-bootstrap";

const PriceSchedule = () => {
  return (
    <Container className="bg-mint fullHeight m-2 p-2" id="priceSchedule">
      <h2>Price and Schedule</h2>
      <div className="text-center d-lg-flex mx-lg-5">
        <img
          src="resources/images/trio.jpg"
          alt="Pilates trio class"
          className="img-fluid"
          width="400"
          height="600"
        />
        <div className="mx-lg-3">
          {/* <!-- <h2>Mat Classes</h2> --> */}
          <h3 className="pt-2">
            Beginner, Intermediate, Advanced and Pilates Fusion
          </h3>
          <p className="px-3">
            Modifications are given based on individual needs. Small apparatus
            such as exercise bands, magic circles, foam rollers and light hand
            weights may be utilized. Exercise mats are provided for all mat
            classes but you may bring your own.
          </p>
          {/* <!-- <h3>Mat Class Fees</h3>
      <ul>
        <li>Drop-in - $15 per class</li>
        <li>Class card - $60 for 6 classes</li>
      </ul> --> */}
          <p>
            Please call<i className="fa fa-phone"></i>
            <a href="tel:+17704010203">770-401-0203</a> to register.
            <br />
            Class times subject to change. A minimum of 5 students is needed to
            hold the class.
          </p>
          <h3>Apparatus Fees</h3>
          <ul>
            <li>Private lessons $95</li>
            <li>Semi-Private $52</li>
            <li>Group: Trio $35 or Quad $35</li>
          </ul>
          <h3>Mat Classes</h3>
          {/* <!-- <p>Friday 11:30-12:30</p> --> */}
          <p>
            Call for current schedule and pricing. <br />
            New classes forming.
          </p>
        </div>
      </div>
      {/* <!--Coupon--> */}
      <img
        src="resources/images/RF-couponWeb.jpg"
        alt="$10 off first time client coupon"
        className="img-fluid mx-auto mb-1"
        width="400"
        height="400"
      />
      <p className="couponText">
        Show this coupon to get $10 off your first session! First time customers
        only.
      </p>
    </Container>
  );
};

export default PriceSchedule;
