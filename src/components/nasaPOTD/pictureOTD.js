import React, { useEffect, useState } from "react";

function PictureOfTheDay({ date }) {
  //const [picture, setPicture] = useState({});
  const [testPicture, setTestPicture] = useState({});

  useEffect(() => {
    if (testPicture) {
      async function getPicture() {
        const res = await fetch(
          `https://api.nasa.gov/planetary/apod?date=${date}&api_key=mhwl0brYfLAa2pAw3H03ye7brCdI2HU0e0BVxn3F`,
          {
            headers: { accept: "application/json" },
          }
        );
        const data = await res.json();
        console.log(data);
        setTestPicture(data);
      }
      getPicture();
    }
  }, [date]);

  return (
    <div>
      <h1 className="imageTitle">{testPicture?.title}</h1>
      <img src={testPicture?.url} width={"auto"} height={"500px"}></img>
      <p className="imageTitle">{testPicture?.explanation}</p>
    </div>
  );
}

export default PictureOfTheDay;
