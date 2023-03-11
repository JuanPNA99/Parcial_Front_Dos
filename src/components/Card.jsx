import React from "react";
import "./card.css";

const Card = ({ userName, userMail}) => {
  return (
    <div className="card">
      <h3>nombre: {userName} </h3>
      <h3>mail: {userMail} </h3>
    </div>
  );
};

export default Card;
