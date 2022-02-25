import React, { useState } from "react";

function App() {
  var dt = new Date(); //Date constructor
  var hh = dt.getHours();
  var mm = dt.getMinutes();
  var ss = dt.getSeconds();
  var curtime = hh + ":" + mm + ":" + ss;
  const [time, setTime] = useState("Time");

  function display() {
    return <div className="container">{setTime(curtime)}</div>;
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={display}>Get Time</button>
    </div>
  );
}

export default App;
