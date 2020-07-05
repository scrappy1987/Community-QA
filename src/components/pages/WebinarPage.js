import React from "react";

export default function WebinarPage() {
  return (
    <div className="jumbotron">
      <h1>Live teaching events</h1>
      <p>
        Come and join us at one of our live teaching events. You can see the
        schedule by pressing the following button.
      </p>
      <p>
        <a
          href="https://www.qa.com/resources/events/"
          className="btn btn-primary float-right"
        >
          Join us
        </a>
      </p>
    </div>
  );
}
