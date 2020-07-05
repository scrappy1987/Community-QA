import React from "react";

export default function SlackPage() {
  return (
    <div className="jumbotron">
      <h1>Keep in touch with Slack</h1>
      <p>
        We have created a Slack channel so we can all stay in touch. Please join
        by pressing the following button.
      </p>
      <p>
        <a
          href="https://qa-ttntc-community.slack.com/"
          className="btn btn-primary float-right"
        >
          Join us
        </a>
      </p>
    </div>
  );
}
