import { Navigate, Route, Routes } from "@solidjs/router";
import { lazy } from "solid-js";

// import Home from "./pages/Home";
// import About from "./pages/About";
import Navbar from "./components/Navbar";
const Home = lazy(() => import("./pages/Home"));
const Bind = lazy(() => import("./pages/Bind"));
const Photo = lazy(() => import("./pages/Photo"));
const About = lazy(() => import("./pages/About"));

export default function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/bind" component={Bind} />
        <Route path="/photos" component={Photo} />
        <Route path="/about" component={About} />
        <Route path="/*">
          <Navigate href="/" />
        </Route>
      </Routes>
    </>
  );
}
