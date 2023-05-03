import Info from "./Info.tsx";
import { createSignal, For } from "solid-js";
import Greeting from "./Greeting.tsx";
import ColoredList from "./ColoredList.tsx";

const pkg = {
  name: "solid-js",
  version: 1,
  speed: "⚡️",
  website: "https://solidjs.com"
};

const [name, setName] = createSignal("Daniel");
const [color, setColor] = createSignal("purple");

export default function () {
  return (
    <>
      <Info {...pkg} />
      <p />
      <Greeting greeting="你好" name={name()} style={{ color: "teal" }} />
      <button class="btn" onClick={() => setName("邱张华")}>
        设置中文名
      </button>
      <p />
      <ColoredList color={color()}>
        <For each={["Most", "Interesting", "Thing"]}>
          {(item) => <div>{item}</div>}
        </For>
      </ColoredList>
      <button class="btn" onClick={() => setColor("teal")}>
        Set Color to teal
      </button>
    </>
  );
}
