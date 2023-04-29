import "./style.css";
import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
const App = lazy(() => import("./App"));

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
