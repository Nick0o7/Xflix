import "./App.css";
import Home from "./Home";
import { Route, Switch } from "react-router";
import VideoPage from "./VideoPage";
import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

export const config = {
  endpoint:
    "https://cfc11079-d41b-45ec-93d9-f3c98a712ae3.mock.pstmn.io/v1/videos",
};

const App = () => {
  return (
    <div className="App">
      <Switch>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <Route exact path="/" component={Home} />
          <Route exact path="/video/:id" component={VideoPage} />
        </LocalizationProvider>
      </Switch>
    </div>
  );
};

export default App;
