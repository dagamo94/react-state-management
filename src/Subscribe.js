import React, { useState } from "react";

function Subscribe() {
  const [subscribed, setSubscribed] = useState(false); // useState(false) sets the initial value of 'subscribe' to false
  const [alerts, setAlerts] = useState(false);
  const [counter, setCounter] = useState(0);
  console.log("Subscribed status:", subscribed);
  console.log("Alerts status:", alerts);
  return (
    <section>
      <p>Please click to subscribe to updates.</p>
      <button onClick={() => setSubscribed(!subscribed)}>
        {subscribed ? "Unsubscribe" : "Subscribe"}
      </button>
      <button onClick={() => setAlerts(!alerts)}>
        {alerts ? "Stop Email Alerts" : "Get Email Alerts"}
      </button>
      <button onClick={() => setCounter(counter + 1)}>
        Click counter: {counter}
      </button>
    </section>
  );
}

export default Subscribe;
