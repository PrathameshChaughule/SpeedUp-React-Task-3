import React from "react";

function Card({ name, desc, img }) {
  return (
    <div className=" card h-100 shadow-sm">
      <img src={img} style={{ height: "250px" }} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{desc}</p>
        <button className="btn btn-primary me-3">Add to Cart</button>
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
}

export default Card;
