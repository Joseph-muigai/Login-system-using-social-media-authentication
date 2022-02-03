import React from "react";

const Card = ({ post }) => {
  return (
    <div className="card">
      <span className="cardTitle">{post.title}</span>
      <img src={post.img} alt={post.title} className="cardimg" />
      <p className="cardDesc">{post.desc}</p>
      <button className="cardButton">Read More</button>
    </div>
  );
};

export default Card;
