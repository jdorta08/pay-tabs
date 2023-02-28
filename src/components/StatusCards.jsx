import React, { useState } from "react";
import Card from "./Card";
import cardData from "../data/cardData";

function StatusCards() {
  //map function iterates through the array cardData and returns a new array with an only property of completed set to false
  const [status, setStatus] = useState(
    cardData.map(() => {
      return { completed: false };
    })
  );
  //function that takes and index to know wich array item was clicked. Creates a copy of the status array using the spread operator and stores it in a newStatus var.
  //
  function statusHandler(index) {
    let newStatus = [...status];
    newStatus[index].completed = !newStatus[index].completed;
    setStatus(newStatus);
  }

  return (
    <div className="w-full flex flex-col">
      <h1 className="font-bold text-4xl -sm:text-3xl px-8 py-2">Dashboard</h1>
      {cardData.map((data, index) => (
        <Card
          key={data.id}
          data={data}
          status={status[index].completed}
          setStatus={() => statusHandler(index)}
        />
      ))}
    </div>
  );
}

export default StatusCards;
