import React, { useState } from "react";

function Subscribe() {
  const [subscribed, setSubscribed] = useState(false); // useState(false) sets the initial value of 'subscribe' to false
  const [alerts, setAlerts] = useState(false);
  const [subscribedCount, setSubscribedCount] = useState(0);
  console.log("Subscribed status:", subscribed);
  console.log("Alerts status:", alerts);
  return (
    <section>
      <p>Please click to subscribe to my updates!</p>
      <p>Subscriber Count: {subscribedCount}</p>
      <button
        onClick={() => {
          setSubscribed(!subscribed);
          setSubscribedCount( currentCount => currentCount + 1);
          setSubscribedCount( currentCount => currentCount + 1);
          if (!alerts) setAlerts(true);
        }}
      >
        {subscribed ? "Unsubscribe" : "Subscribe"}
      </button>
      <button onClick={() => setAlerts(!alerts)}>
        {alerts ? "Stop Email Alerts" : "Get Email Alerts"}
      </button>
    </section>
  );
}

export default Subscribe;
