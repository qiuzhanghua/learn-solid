import Info from "./Info.tsx";
import { createSignal } from "solid-js";
import Greeting from "./Greeting.tsx";

const pkg = {
  name: "solid-js",
  version: 1,
  speed: "⚡️",
  website: "https://solidjs.com"
};

const [name, setName] = createSignal("Daniel");

export default function () {
  return (
    <>
      <Info {...pkg} />
      <p />
      <Greeting greeting="你好" name={name()} style={{ color: "teal" }} />
      <button class="btn" onClick={() => setName("邱张华")}>
        设置中文名
      </button>
    </>
  );
}
