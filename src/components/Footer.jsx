import React from "react";
import Assets from "../assets";

export default function Footer() {
  return (
    <section id="footer" className="my-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          <div className="col text-start">
            <p>
              <a href="#" className="text-decoration-none text-dark">
                Jalan Suroyo No. 161 Mayangan
                <br />
                Kota Probolonggo 672000
              </a>
            </p>
            <p>
              <a
                href="mailto:binarcarrental@gmail.com"
                className="text-decoration-none text-dark"
              >
                binarcarrental@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:081233334808"
                className="text-decoration-none text-dark"
              >
                081-233-334-808
              </a>
            </p>
          </div>
          <div className="col text-start">
            <p>
              <a
                className="text-decoration-none text-dark"
                href="#our-services"
              >
                Our Services
              </a>
            </p>
            <p>
              <a className="text-decoration-none text-dark" href="#why-us">
                Why Us
              </a>
            </p>
            <p>
              <a className="text-decoration-none text-dark" href="#testimonial">
                Testimonial
              </a>
            </p>
            <p>
              <a className="text-decoration-none text-dark" href="#faq">
                FAQ
              </a>
            </p>
          </div>
          <div className="col text-start">
            <p>Connect With Us</p>
            <div className="d-flex gap-2">
              <a href="#">
                <img
                  className="image-gap"
                  src={Assets.iconFacebook}
                  alt="Facebook"
                />
              </a>
              <a href="#">
                <img
                  className="image-gap"
                  src={Assets.iconInstagram}
                  alt="Instagram"
                />
              </a>
              <a href="#">
                <img
                  className="image-gap"
                  src={Assets.iconTwitter}
                  alt="Twitter"
                />
              </a>
              <a href="#">
                <img className="image-gap" src={Assets.iconMail} alt="Email" />
              </a>
              <a href="#">
                <img
                  className="image-gap"
                  src={Assets.iconTwitch}
                  alt="Twitch"
                />
              </a>
            </div>
          </div>
          <div className="col text-start">
            <p>Copyright Binar 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
}
