import React from "react";

function Card({ status, setStatus, data }) {
  let taskStatus = status === true ? "Completed" : "Pending"; //set status value
  let buttonText = taskStatus === "Completed" ? "Pending" : "Completed"; //set the button text depending on status
  //toggle status
  function statusHandler() {
    setStatus(!status);
  }
  //SETTING STYLES FOR THE STATUS TEXT
  let styles = {
    color: "",
  };

  if (taskStatus === "Pending") {
    styles.color = "#ffa602";
  } else if (taskStatus === "Due") {
    styles.color = "#ff2525";
  } else {
    styles.color = "#49df49";
  }
  //END OF STYLES FOR STATUS TEXT
  return (
    <div className="w-full flex flex-col">
      <div
        key={data.id}
        className="w-8/12 bg-gray-100 mx-7 my-2 drop-shadow-md p-8 -md:w-11/12 -md:mx-auto"
      >
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">{data.title}</h2>
          <p className="text-base">{data.description}</p>
          <h3 className="font-medium">
            Status: <span style={styles}>{taskStatus}</span>
          </h3>
          <div className="flex justify-start py-1 gap-2">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-sm "
              onClick={statusHandler}
            >
              Mark as {buttonText}
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-sm">
              Archive Tasks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
