import React, { useState, useCallback } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import DarkOverlay from "../components/DarkOverlay";
import "bootstrap/dist/css/bootstrap.min.css";
import { listCars } from "../utils/getCars";
import assets from "../assets";
import { Link } from "react-router-dom";

export default function Cari() {
  const [cars, setCars] = useState(null);
  const [inputData, setInputData] = useState({
    typeDriver: "",
    tanggal: "",
    jam: "",
    capacity: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    if (
      inputData.typeDriver === "" ||
      inputData.tanggal === "" ||
      inputData.jam === ""
    ) {
      return alert("Mohon dipilih Tipe Driver, Tanggal dan waktu jemput");
    }

    const data = await listCars((el) => {
      return inputData.capacity
        ? el.capacity >= inputData.capacity
        : true &&
            el.typeDriver === inputData.typeDriver &&
            el.availableAt >= new Date(inputData.tanggal) &&
            el.availableAt.getHours() >= Number(inputData.jam);
    });
    setIsFormLabelClicked(false);
    setCars(data);
  };
  const [isFormLabelClicked, setIsFormLabelClicked] = useState(false);

  const handleFormLabelClick = useCallback(() => {
    if (!isFormLabelClicked) {
      setIsFormLabelClicked(true);
    }
  }, [isFormLabelClicked]);

  const PageContent = () => (
    <>
      <Navigation />
      <Hero ShowButton={false} />

      <section
        id="search"
        className="mt-n5"
        style={{ position: "relative", zIndex: 10000 }}
      >
        <div className="container">
          <div className="card">
            <div className="card-body">
              <form className="row g-3 justify-content-center" id="form-search">
                <div className="col-auto">
                  <label className="form-label">
                    Tipe Driver<span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-select"
                    id="tipedriver"
                    name="typeDriver"
                    required
                    value={inputData.typeDriver}
                    onChange={(e) => handleChange(e)}
                    onClick={handleFormLabelClick}
                  >
                    <option value="">Pilih Tipe Driver</option>
                    <option value="Dengan Supir">Dengan Sopir</option>
                    <option value="Lepas Kunci">
                      Tanpa Sopir (Lepas Kunci)
                    </option>
                  </select>
                </div>
                <div className="col-auto">
                  <label className="form-label">
                    Tanggal<span className="text-danger">*</span>
                  </label>
                  <input
                    type="date"
                    id="tanggal"
                    name="tanggal"
                    className="form-control"
                    placeholder="Pilih Tanggal"
                    required
                    value={inputData.tanggal}
                    onChange={(e) => handleChange(e)}
                    onClick={handleFormLabelClick}
                  />
                </div>
                <div className="col-auto">
                  <label className="form-label">
                    Waktu / Jam Jemput<span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-select"
                    id="jam"
                    name="jam"
                    required
                    value={inputData.jam}
                    onChange={(e) => handleChange(e)}
                    onClick={handleFormLabelClick}
                  >
                    <option value="">Pilih Jam Jemput</option>
                    <option value="8">08.00</option>
                    <option value="9">09.00</option>
                    <option value="10">10.00</option>
                    <option value="11">11.00</option>
                    <option value="12">12.00</option>
                  </select>
                </div>
                <div className="col-auto">
                  <label className="form-label">
                    Jumlah Penumpang(optional)
                  </label>
                  <input
                    type="number"
                    id="penumpang"
                    className="form-control"
                    placeholder="Jumlah Penumpang"
                    name="capacity"
                    value={inputData.capacity}
                    onChange={(e) => handleChange(e)}
                    onClick={handleFormLabelClick}
                  />
                </div>
                <div className="col-auto">
                  <label className="form-label invisible">cari mobil</label>
                  <button
                    type="button"
                    id="cari"
                    className="btn btn-success d-block"
                    onClick={(e) => handleSearch(e)}
                  >
                    Cari Mobil
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section
        id="search-result"
        className="my-5"
        style={{ position: "relative", zIndex: 10000 }}
      >
        <div className="container">
          <div className="row">
            {cars
              ? cars.map((e, index) => (
                  <div className="col-12 col-md-4 mb-4" key={index}>
                    <div className="card pb-2">
                      <img
                        src={e.image}
                        className="card-img-top img-fluid"
                        alt={e.name}
                      />
                      <div className="card-body">
                        <h6>{e.name}</h6>
                        <label>{e.price}</label>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Tempora, accusamus!
                        </p>
                        <ul>
                          <li>
                            <img src={assets.iconUsers} />
                            <span>{e.capacity} Orang</span>
                          </li>
                          <li>
                            <img src={assets.iconSettings} />
                            <span>Manual</span>
                          </li>
                          <li>
                            <img src={assets.iconCalendar} />
                            <span>Tahun 2020</span>
                          </li>
                        </ul>
                        <Link
                          to={"/cari/detail/" + e.id}
                          className="btn btn-success d-block"
                        >
                          Pilih Mobil
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              : cars !== null && (
                  <p className="text-center">
                    Hasil Tidak Ditemukan, Silahkan Melakukan Pencarian Ulang!
                  </p>
                )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );

  return (cars && cars.length > 0) || !isFormLabelClicked ? (
    <PageContent />
  ) : (
    <DarkOverlay>
      <PageContent />
    </DarkOverlay>
  );
}
