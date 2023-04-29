import { createSignal, Show } from "solid-js";

export default function About () {
  const [loggedIn, setLoggedIn] = createSignal(false);
  const toggle: () => boolean = () => setLoggedIn(!loggedIn());

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
    </>
  );
}
