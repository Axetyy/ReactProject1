import React, { useState } from "react";
import Card from "../../components/Card/Card";
import "./CardsPage.styles.css";


const mockData = [
  {
    title: "Card Title 1",
    description: "This is a description for card 1.",
    imageUrl: "https://via.placeholder.com/300",
    date: "2024-08-10",
  },
  {
    title: "Card Title 2",
    description: "This is a description for card 2.",
    imageUrl: "https://via.placeholder.com/300",
    date: "2024-08-11",
  },
];

const CardsPage: React.FC = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
}
const CardsPage: React.FC = () => {
  return (
    <div className="cards-page">
      {mockData.map((data, index) => (
        <Card
          key={index}
          title={data.title}
          description={data.description}
          imageUrl={data.imageUrl}
          date={data.date}
        />
      ))}
    </div>
  );
};
export default CardsPage;
