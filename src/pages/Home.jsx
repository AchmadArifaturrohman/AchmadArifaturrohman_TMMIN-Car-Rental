import React from "react";
import Assets from "../assets";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import { Link } from "react-router-dom";

export default function home() {
  return (
    <>
      <Navigation />
      <Hero ShowButton={true} />
      <section id="our-services">
        <div className="container py-5 my-5">
          {/* container digunakan di setiap section agar tampilan rapi dan konsisten */}

          {/* grid bootstrap menggunakan flex jadi kita bisa mengatur aligment mengunakan align-items dan justify-content */}
          <div className="row align-items-center">
            {/* perilaku col di bawah sama dengan yang di terapkan di hero */}
            {/* mb adalah class utilitas bootstrap untuk menambahkan margin bottom */}
            {/* sama dengan col karena kita hanya membutuhkan margin di ukuran layar terkecil sampai 767px */}
            {/* maka di ukuran layar 768px ke atas kita hapus marginnya dengan menggunakan mb-md-0 */}
            <div className="col-12 col-md-6 mb-5 mb-md-0">
              <img
                src={Assets.imgService}
                className="img-fluid"
                alt="TMMIN Car Rental Services"
              />
            </div>
            <div className="col-12 col-md-6">
              <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
              <p>
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <ul>
                <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                <li>Sewa Mobil Jangka Panjang Bulanan</li>
                <li>Gratis Antar - Jemput Mobil di Bandara</li>
                <li>Layanan Airport Transfer / Drop In Out</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="why-us">
        <div className="container py-5 my-5">
          {/* container digunakan di setiap section agar tampilan rapi dan konsisten */}
          <h2 className="mb-3">Why Us?</h2>
          <p className="mb-4">Mengapa harus pilih Binar Car Rental?</p>
          {/* cara cepat membuat row col -> ketik : div.row>div.col*4 , kemudian ctrl + space  */}
          <div className="row">
            {/* perilaku col di bawah sama dengan yang di terapkan di hero */}
            {/* tetapi yang berbeda disini kita menggunakan 3 ukuran berbeda  */}
            {/* col-12 (full) di ukuran layar terkecil sampai 767px */}
            {/* col-md-6 (50:50 / setengah ukuran) di ukuran layar 768px keatas sampai 991px */}
            {/* col-lg-3 (dibagi menjadi 4 kolom (12/4)) akan di terapkan di ukuran layar mulai 992px keatas */}
            <div className="col-12 col-md-6 col-lg-3 my-2">
              <div className="card">
                <div className="card-body">
                  <img
                    src={Assets.iconComplete}
                    className="mb-4"
                    alt="TMMIN Car Rental - Mobil Lengkap"
                  />
                  <h3 className="mb-4">Mobil Lengkap</h3>
                  <p>
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 my-2">
              <div className="card">
                <div className="card-body">
                  <img
                    src={Assets.iconPrice}
                    className="mb-4"
                    alt="TMMIN Car Rental - Harga Murah"
                  />
                  <h3 className="mb-4">Harga Murah</h3>
                  <p>
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 my-2">
              <div className="card">
                <div className="card-body">
                  <img
                    src={Assets.icon24hrs}
                    className="mb-4"
                    alt="TMMIN Car Rental - Layanan 24 Jam"
                  />
                  <h3 className="mb-4">Layanan 24 Jam</h3>
                  <p>
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 my-2">
              <div className="card">
                <div className="card-body">
                  <img
                    src={Assets.iconProfessional}
                    className="mb-4"
                    alt="TMMIN Car Rental - Sopir Profesional"
                  />
                  <h3 className="mb-4">Sopir Profesional</h3>
                  <p>
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
      <section id="sewa-mobil" className="my-5">
        <div className="card text-center bg-red text-light mx-auto p-5">
          <div className="card-body">
            <h1 className="card-title">Sewa Mobil di (Lokasimu) Sekarang</h1>
            <p className="card-text p-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link to="/cari" className="btn btn-success">
              Mulai Sewa Mobil
            </Link>
          </div>
        </div>
      </section>
      <section id="faq" className="my-5">
        <div className="container py-5 my-5 mx-auto p-0">
          <div className="row">
            <div className="col-sm-5">
              <h2 className="mb-3">Frequently Asked Questions</h2>
              <p className="mb-4">
                Berbagai pertanyaan yang sering ditanyakan oleh pelanggan kami
              </p>
            </div>
            <div className="col-sm-7">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item mb-3 border-top custom-accordion">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      Apa saja syarat yang dibutuhkan?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the second item's accordion body.</strong>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3 border-top custom-accordion">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Berapa hari minimal sewa mobil lepas kunci?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the second item's accordion body.</strong>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3 border-top custom-accordion">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Berapa hari sebelumnya sabaiknya booking sewa mobil?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3 border-top custom-accordion">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Apakah Ada biaya antar-jemput?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the fourth item's accordion body.</strong>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3 border-top custom-accordion">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Bagaimana jika terjadi kecelakaan
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the fifth item's accordion body.</strong>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
