import React from "react";
import penilianLogo from "../assets/penilian-logo.png";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Penilaian Pelanggan</h2>
      <div className="testimonial">
        <img
          src={penilianLogo}
          alt="Customer Photo"
          className="customer-photo"
        />
        <p>
          "Website ini sangat membantu saya untuk mencari kue kering dengan
          cepat dan efisien tanpa harus pergi ke toko offline."
        </p>
        <p className="customer-name">Nabila</p>
      </div>
    </section>
  );
};

export default Testimonials;
