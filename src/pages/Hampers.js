import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hampers.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "../components/Header";
import Hampers1 from "../assets/Hampers1.png";
import Hampers2 from "../assets/Hampers2.png";
import Hampers3 from "../assets/Hampers3.png";
import Hampers4 from "../assets/hampers4.png";
import Hampers5 from "../assets/hampers5.png";
import Hampers6 from "../assets/hampers6.png";

const Hampers = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="product-list">
          <div className="product-card">
            <img src={Hampers1} alt="Hampers Premium 2" />
            <h3>Hampers Premium 2</h3>
            <p>Harga: Rp.250.000</p>
            <p>Berat: 250 gram</p>
            <p>Isi kue: 3</p>
            <button>
              tambahkan ke keranjang{" "}
              <span>
                <i className="bi bi-cart"></i>
              </span>
            </button>
          </div>
          <div className="product-card">
            <img src={Hampers2} alt="Hampers Hemat" />
            <h3>Hampers Hemat</h3>
            <p>Harga: Rp.100.000</p>
            <p>Berat: 250 gram</p>
            <p>Isi kue: 3</p>
            <button>
              tambahkan ke keranjang{" "}
              <span>
                <i className="bi bi-cart"></i>
              </span>
            </button>
          </div>
          <div className="product-card">
            <img src={Hampers3} alt="Hampers Hemat.2" />
            <h3>Hampers Hemat.2</h3>
            <p>Harga: Rp.70.000</p>
            <p>Berat: 250 gram</p>
            <p>Isi kue: 2</p>
            <button>
              tambahkan ke keranjang{" "}
              <span>
                <i className="bi bi-cart"></i>
              </span>
            </button>
          </div>
          <div className="product-card">
            <img src={Hampers4} alt="Hampers Platinum" />
            <h3>Hampers Platinum</h3>
            <p>Harga: Rp.500.000</p>
            <p>Berat kue: 250 gram</p>
            <p>Isi kue: 9</p>
            <button>
              tambahkan ke keranjang{" "}
              <span>
                <i className="bi bi-cart"></i>
              </span>
            </button>
          </div>
          <div className="product-card">
            <img src={Hampers5} alt="Hampers Royal" />
            <h3>Hampers Royal</h3>
            <p>Harga: Rp.600.000</p>
            <p>Berat kue: 250 gram</p>
            <p>Isi kue: 5</p>
            <button>
              tambahkan ke keranjang{" "}
              <span>
                <i className="bi bi-cart"></i>
              </span>
            </button>
          </div>
          <div className="product-card">
            <img src={Hampers6} alt="Hampers Hemat.3" />
            <h3>Hampers Hemat.3</h3>
            <p>Harga: Rp.100.000</p>
            <p>Berat kue: 250 gram</p>
            <p>Isi kue: 3</p>
            <button>
              tambahkan ke keranjang{" "}
              <span>
                <i className="bi bi-cart"></i>
              </span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hampers;
