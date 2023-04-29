import { createSignal, JSX, Show } from "solid-js";

export default function About () {
  const [loggedIn, setLoggedIn] = createSignal(false);
  const toggle: () => boolean = () => setLoggedIn(!loggedIn());

  const Fallback: () => JSX.Element = () => (
    <button class="btn btn-primary" onClick={toggle}>
      Login
    </button>
  );

  return (
    <>
      <div class="m-3">
        Learn SolidJS<p>邱张华</p>
      </div>
      <Show when={loggedIn()} fallback={Fallback()}>
        <button class="btn btn-error" onClick={toggle}>
          Logout
        </button>
      </Show>
    </>
  );
}
