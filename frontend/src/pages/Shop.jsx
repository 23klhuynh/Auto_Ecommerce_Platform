import React from "react";

const cards = [
  { name: 1 },
  { name: 2 },
  { name: 3 },
  { name: 4 },
  { name: 5 },
  { name: 6 },
  { name: 7 },
  { name: 8 },
  { name: 9 },
  { name: 10 },
  { name: 11 },
  { name: 12 },
  { name: 13 },
  { name: 14 },
  { name: 15 },
  { name: 16 },
  { name: 17 },
  { name: 18 },
  { name: 19 },
  { name: 20 },
];

function Shop() {
  return (
    <div className="shop">
      <div className="shop__cards">
        {cards.map((card, index) => (
          <div className="shop__card" key={index}>
            <h1>{card.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
