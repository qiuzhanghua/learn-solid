import Counter from "../components/Counter";
import {
  createSignal,
  ErrorBoundary,
  Index,
  Match,
  ParentComponent,
  Switch
} from "solid-js";

const Broken: ParentComponent = (props) => {
  throw new Error("Oh No");
  return <>Never Getting Here</>;
};

export default function Home () {
  const [cats, setCats] = createSignal([
    { id: "J---aiyznGQ", name: "Keyboard Cat" },
    { id: "z_AbfPXTKms", name: "Maru" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" }
  ]);

  const [x] = createSignal(7);

  return (
    <>
      <Counter />
      <p />
      <p />
      <ul>
        <Index each={cats()}>
          {(cat, i) => (
            <li>
              <a
                target="_blank"
                href={`https://www.youtube.com/watch?v=${cat().id}`}
              >
                {i + 1}: {cat().name}
              </a>
            </li>
          )}
        </Index>
      </ul>
      <p />
      <p />
      <Switch fallback={<p>{x()} is between 5 and 10</p>}>
        <Match when={x() > 10}>
          <p>{x()} is greater than 10</p>
        </Match>
        <Match when={x() < 5}>
          <p>{x()} is less than 5</p>
        </Match>
      </Switch>
      <p />
      <div>Before</div>
      <ErrorBoundary fallback={(err) => err + "  !!"}>
        <Broken />
      </ErrorBoundary>
      <div>After</div>
    </>
  );
}
