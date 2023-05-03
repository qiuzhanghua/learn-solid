import { Navigate, Route, Routes } from "@solidjs/router";
import { lazy } from "solid-js";

import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Bind from "./pages/Bind";
// import Photo from "./pages/Photo";
// import Properties from "./pages/Properties";
// import Todo from "./pages/Todo";
// import About from "./pages/About";
const Home = lazy(() => import("./pages/Home"));
const Bind = lazy(() => import("./pages/Bind"));
const Photo = lazy(() => import("./pages/Photo"));
const Properties = lazy(() => import("./pages/Properties"));
const Todo = lazy(() => import("./pages/Todo"));
const About = lazy(() => import("./pages/About"));

export default function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/bind" component={Bind} />
        <Route path="/photos" component={Photo} />
        <Route path="/prop" component={Properties} />
        <Route path="/todo" component={Todo} />
        <Route path="/about" component={About} />
        <Route path="/*">
          <Navigate href="/" />
        </Route>
      </Routes>
    </>
  );
}
