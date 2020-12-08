import React from "react";

const determineSeason = (lat, month) => {
  if (month > 2 && month < 9) {
   return lat > 0 ? "summer" : "winter";
  } else  {
    return lat > 0 ? 'winter' : 'summer';
  }
};


const SeasonDisplay = props => {
// console.log(props.lat)
const season = determineSeason(props.lat, new Date().getMonth());
console.log(season)
return <div>the current season is {season} </div>
};

export default SeasonDisplay;