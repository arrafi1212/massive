import React from "react";
import Hampers1 from "../assets/Hampers1.png";
import Hampers2 from "../assets/Hampers2.png";
import Hampers3 from "../assets/Hampers3.png";
// import Hampers4 from "../assets/Hampers4.png";
// import Hampers5 from "../assets/Hampers5.png";
// import Hampers6 from "../assets/Hampers6.png";

const Hampers = () => {
  return (
    <section className="hampers">
      <h2>Rekomendasi Hampers</h2>
      <div className="hamper-list">
        <div className="hamper">
          <img src={Hampers1} alt="Hampers PREMIUM 1" />
          <h3>Hampers PREMIUM 1</h3>
          <p>
            Rp.350.000
            <br />
            Isi: 6 kue
          </p>
          <a href="#">Lihat Selengkapnya</a>
        </div>
        <div className="hamper">
          <img src={Hampers2} alt="Hampers PLATINUM" />
          <h3>Hampers PLATINUM</h3>
          <p>
            Rp.450.000
            <br />
            Isi: 6 kue
          </p>
          <a href="#">Lihat Selengkapnya</a>
        </div>
        <div className="hamper">
          <img src={Hampers3} alt="Hamper MINIMALIS 1" />
          <h3>Hamper MINIMALIS 1</h3>
          <p>
            Rp.150.000
            <br />
            Isi: 3 kue
          </p>
          <a href="#">Lihat Selengkapnya</a>
        </div>
      </div>
    </section>
  );
};

export default Hampers;
