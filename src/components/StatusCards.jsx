import React from "react";
import cardData from "../data/cardData";

function StatusCards() {
  return (
    <div className="w-full flex flex-col">
      {cardData.map((data) => {
        let styles = {
          color: "",
        };

        if (data.status === "Pending") {
          styles.color = "#ffa602";
        } else if (data.status === "Due") {
          styles.color = "#ff2525";
        } else {
          styles.color = "#49df49";
        }

        return (
          <div
            key={data.id}
            className="w-8/12 bg-gray-100 mx-7 my-2 drop-shadow-md p-8 -md:w-11/12 -md:mx-auto"
          >
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">{data.title}</h2>
              <p className="text-base">{data.description}</p>
              <h3>
                Status: <span style={styles}>{data.status}</span>
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StatusCards;
