import { createSignal } from "solid-js";
import "./Bind.css";
export default function Bind () {
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
    </>
  );
}
