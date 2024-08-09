import React from "react";
import Assets from "../assets";
import { Link } from "react-router-dom";

export default function Hero({ ShowButton = true }) {
  return (
    <>
      <section id="hero" className="bg-red">
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex align-items-center text-light">
              <div>
                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p>
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                {ShowButton && (
                  <Link to="/cari" className="btn btn-success">
                    Mulai Sewa Mobil
                  </Link>
                )}
              </div>
            </div>
            <div className="col-6 justify-content-right">
              <img
                src={Assets.zenix}
                className="img-fluid"
                alt="gambar-mobil"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
