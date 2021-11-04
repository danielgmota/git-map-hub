import { Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import "mapbox-gl/dist/mapbox-gl.css";
import "./assets/css/global.css";

export function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
}
