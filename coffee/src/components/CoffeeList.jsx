/** @format */

import React, { useEffect, useState } from "react";
import Card from "./Cards";

const CoffeeList = () => {
  const [coffeeData, setCoffeeData] = useState([]);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    )
      .then((res) => res.json())
      .then((data) => setCoffeeData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredData = showAvailableOnly
    ? coffeeData.filter((item) => item.available)
    : coffeeData;

  return (
    <div>
      {/* <button onClick={() => setShowAvailableOnly(!showAvailableOnly)}>
        {showAvailableOnly ? "Show All" : "Show Available Only"}
      </button> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default CoffeeList;
