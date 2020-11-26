import React, { useState, useEffect } from "react";

function SalahTimes(props) {
  const [timings, setTimings] = useState({});

  async function callApi(c) {
    var uri = new URL("http://api.aladhan.com/v1/timings");
    uri.searchParams.append("latitude", c.lat);
    uri.searchParams.append("longitude", c.long);
    uri.searchParams.append("method", 2);
    uri.searchParams.append("school", 0);
    uri.searchParams.append("annual", "false");

    const response = await fetch(uri, { method: "GET" });
    const result = await response.json();
    return result.data.timings;
  }

  useEffect(() => {
    async function asyncEffect() {
      setTimings(await callApi(props));
    }
    asyncEffect();
  }, []);

  const ampm = (time) =>{
    if(time){
      const arr = time.split(":");
      const t = parseInt(arr[0]);
      return ((t + 11) % 12 + 1) + ":" + arr[1];
    }
  }

  if (timings) {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Fajr</th>
              <th>Dhuhr</th>
              <th>Asr</th>
              <th>Maghrib</th>
              <th>Isha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{ampm(timings.Fajr)}</td>
              <td>{ampm(timings.Dhuhr)}</td>
              <td>{ampm(timings.Asr)}</td>
              <td>{ampm(timings.Maghrib)}</td>
              <td>{ampm(timings.Isha)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}

export default SalahTimes;
