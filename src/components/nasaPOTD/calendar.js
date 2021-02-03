import React, { useState } from "react";
import PictureOfTheDay from "./pictureOTD";

function Calendar() {
  let current_datetime = new Date();
  let formatted_date =
    current_datetime.getFullYear() +
    "-" +
    (current_datetime.getMonth() + 1) +
    "-" +
    current_datetime.getDate();

  const [date, setDate] = useState(formatted_date);

  return (
    <div>
      <p className="imageTitle">Select Your Date:</p>
      <input
        onChange={(e) => setDate(e.target.value)}
        type="date"
        id="input-date"
        name="date"
        min="1995-06-16"
        max=""
      />
      <PictureOfTheDay date={date} />
    </div>
  );
}

export default Calendar;
