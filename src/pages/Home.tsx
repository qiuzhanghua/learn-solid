import Counter from "../components/Counter";
import { createSignal, Index } from "solid-js";

export default function Home () {
  const [cats, setCats] = createSignal([
    { id: "J---aiyznGQ", name: "Keyboard Cat" },
    { id: "z_AbfPXTKms", name: "Maru" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" }
  ]);

  return (
    <>
      <Counter />
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
    </>
  );
}
