import React from "react";
import cardData from "../data/cardData";

function StatusCards() {
  return (
    <div className="w-full flex flex-col">
      {cardData.map((data) => (
        <div
          key={data.id}
          className="w-8/12 bg-gray-200 mx-7 my-2 drop-shadow-md p-8 -md:w-11/12 -md:mx-auto"
        >
          <div className="flex flex-col">
            <h2 className="">{data.title}</h2>
            <p className="">{data.description}</p>
            <h3 className="">Status: {data.status}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatusCards;
