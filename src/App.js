import "./App.css";
import HomePage from "./Pages/HomePage";
import Bookmark from "./Pages/Bookmark";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/mylist" component={Bookmark} />
      </Switch>
    </div>
  );
}

export default App;
