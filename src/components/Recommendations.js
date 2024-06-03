import React from "react";
import Nastar from "../assets/Nastar.png";
import CoklatKacang from "../assets/Coklat-Kacang.png";
import SaKeSu from "../assets/Sagu-Keju-Susu.png";

const Recommendations = () => {
  return (
    <section className="recommendations">
      <h2>Rekomendasi Kue kering</h2>
      <div className="product-list">
        <div className="product">
          <img src={Nastar} alt="Nastar" />
          <h3>Nastar</h3>
          <p>
            Rp.75.000
            <br />
            Berat: 250 gram
          </p>
          <a href="#">Lihat Selengkapnya</a>
        </div>
        <div className="product">
          <img src={CoklatKacang} alt="Cokelat Kacang" />
          <h3>Cokelat Kacang</h3>
          <p>
            Rp.60.000
            <br />
            Berat: 250 gram
          </p>
          <a href="#">Lihat Selengkapnya</a>
        </div>
        <div className="product">
          <img src={SaKeSu} alt="Sagu Keju Susu" />
          <h3>Sagu Keju Susu</h3>
          <p>
            Rp.50.000
            <br />
            Berat: 250 gram
          </p>
          <a href="#">Lihat Selengkapnya</a>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
