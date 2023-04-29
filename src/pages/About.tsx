import { createSignal, For, Show } from "solid-js";
import { Dynamic } from "solid-js/web";

const RedThing = () => <strong style={{ color: "red" }}>Red Thing</strong>;
const GreenThing = () => (
  <strong style={{ color: "green" }}>Green Thing</strong>
);
const BlueThing = () => <strong style={{ color: "blue" }}>Blue Thing</strong>;

const options = {
  red: RedThing,
  green: GreenThing,
  blue: BlueThing
};

export default function About () {
  const [loggedIn, setLoggedIn] = createSignal(false);
  const toggle: () => boolean = () => setLoggedIn(!loggedIn());
  const [selected, setSelected] = createSignal("red");

  return (
    <>
      <div class="m-3">
        Learn SolidJS<p>邱张华</p>
      </div>
      <Show
        when={loggedIn()}
        fallback={
          <>
            <button class="btn btn-primary" onClick={toggle}>
              Login
            </button>
          </>
        }
      >
        <button class="btn btn-error" onClick={toggle}>
          Logout
        </button>
      </Show>

      <p />
      <select
        value={selected()}
        onInput={(e) => setSelected(e.currentTarget.value)}
      >
        <For each={Object.keys(options)}>
          {(color) => <option value={color}>{color}</option>}
        </For>
      </select>
      <Dynamic component={options[selected()]} />
    </>
  );
}
