import React from "react";
import { Link } from "react-router-dom";
const Card = ({ post }) => {
  return (
    <div className="card">
      <Link className="link" to={`/post/${post.id}`}>
        <span className="cardTitle">{post.title}</span>
        <img src={post.img} alt={post.title} className="cardimg" />
        <p className="cardDesc">{post.desc}</p>
        <button className="cardButton">Read More</button>
      </Link>
    </div>
  );
};

export default Card;
