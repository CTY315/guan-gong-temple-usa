import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pics from "./components/Pics";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={AboutUs} />
          <Route exact path="/pics" component={Pics} />
          <Route exact path="/donation" component={FrontPage} />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
