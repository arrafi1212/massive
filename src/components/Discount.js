import React from "react";
import Kastengel from "../assets/Kastengel.png";
import Cookies from "../assets/Cookies.png";

const Discount = () => {
  return (
    <section className="discount">
      <h2>Dapatkan Potongan Harga 20%</h2>
      <p>
        Kepala Pusing Karena Dompet Kering? Jangan Lewatkan Penawaran Terbaik
        Kami, Nikmati Promo 20% Untuk Produk Pilihan
      </p>
      <div className="promo-products">
        <div className="promo-product">
          <img src={Kastengel} alt="Kastengel" />
          <p>
            Kastengel
            <br />
            Rp.60.000 <span>Rp.48.000</span>
          </p>
          <button>Beli Sekarang</button>
        </div>
        <div className="promo-product">
          <img src={Cookies} alt="Cookies" />
          <p>
            Cookies
            <br />
            Rp.30.000 <span>Rp.24.000</span>
          </p>
          <button>Beli Sekarang</button>
        </div>
      </div>
    </section>
  );
};

export default Discount;
