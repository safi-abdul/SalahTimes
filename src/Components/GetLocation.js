import React, { useState, useEffect } from "react";
import SalahTimes from "./SalahTimes";

function GetLocation() {
  const [pos, setPos] = useState({});

  let posi = {};
  function getCoordinates() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition((position) => {
          posi = {
            lat: position.coords.latitude,
            long: position.coords.longitude,
          };
          resolve(posi);
        });
      } else {
        reject(new Error("Can't find geolocation"));
      }
    });
  }

  useEffect(() => {
    async function asyncEffect() {
      setPos(await getCoordinates());
    }
    asyncEffect();
  }, []);

  if(pos.lat && pos.long){
    return (
        <div>        
        <SalahTimes lat={pos.lat} long={pos.long}/>
        </div>
      );
  }
  else{
    return (
        <div>Loading</div>
      );
  }
}

export default GetLocation;
