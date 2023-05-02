import { createSignal } from "solid-js";
import "./Bind.css";
export default function Bind () {
  const [current, setCurrent] = createSignal("primary");

  const [pos, setPos] = createSignal({ x: 0, y: 0 });

  const [num, setNum] = createSignal(0);
  setInterval(() => setNum((num() + 1) % 255), 30);

  function handleMouseMove (event: MouseEvent) {
    setPos({
      x: event.clientX,
      y: event.clientY
    });
  }

  return (
    <>
      <div class="mouseover" onMouseMove={handleMouseMove}>
        The mouse position is {pos().x} x {pos().y}
      </div>
      <div
        style={{
          color: `rgb(${num()}, 180, ${num()})`,
          "font-weight": 800,
          "font-size": `${num()}px`
        }}
      >
        Some Text
      </div>
      <button
        class="btn"
        classList={{ "btn-primary": current() === "primary" }}
        onClick={() => setCurrent("btn-primary")}
      >
        Primary
      </button>
      <button
        class="btn"
        classList={{ "btn-secondary": current() === "secondary" }}
        onClick={() => setCurrent("secondary")}
      >
        Secondary
      </button>
      <button
        class="btn"
        classList={{ "btn-error": current() === "error" }}
        onClick={() => setCurrent("error")}
      >
        Error
      </button>
    </>
  );
}
