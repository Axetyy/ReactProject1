import React from "react";
import './Card.styles.css';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} alt="Default Image" className="card-image" />
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <span>{props.date}</span>
      </div>
    </div>
  );
};

export default Card;
