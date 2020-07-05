import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./common/Header";
import DiscoverPage from "./pages/DiscoverPage";
import PracticePage from "./pages/PracticePage";
import ApplyPage from "./pages/ApplyPage";
import HomePage from "./pages/HomePage";
import ChallengePage from "./pages/ChallengePage";
import WebinarPage from "./pages/WebinarPage";
import PodcastPage from "./pages/PodcastPage";
import SlackPage from "./pages/SlackPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/discover" component={DiscoverPage} />
        <Route path="/practice" component={PracticePage} />
        <Route path="/apply" component={ApplyPage} />
        <Route path="/webinar" component={WebinarPage} />
        <Route path="/challenge" component={ChallengePage} />
        <Route path="/podcast" component={PodcastPage} />
        <Route path="/slack" component={SlackPage} />
      </Switch>
    </div>
  );
}

export default App;
