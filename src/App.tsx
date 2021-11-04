import { Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import "mapbox-gl/dist/mapbox-gl.css";
import "./assets/css/global.css";
import Repos from "./pages/Repos";

export function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/repos" exact component={Repos} />
    </BrowserRouter>
  );
}
