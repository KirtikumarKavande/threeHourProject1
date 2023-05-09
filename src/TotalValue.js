import React, { useState } from "react";

const TotalValue = ({ allInformation }) => {
  let sum = 0;

  allInformation.map((item) => {
    sum = sum + item.SellingPrice;
  });
  return <div>TotalValue={sum}</div>;
};

export default TotalValue;
