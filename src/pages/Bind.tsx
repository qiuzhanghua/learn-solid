import { createSignal, onCleanup, onMount } from "solid-js";
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

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const ctx = canvas.getContext("2d");
    let frame = requestAnimationFrame(loop);

    function loop (t) {
      frame = requestAnimationFrame(loop);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      for (let p = 0; p < imageData.data.length; p += 4) {
        const i = p / 4;
        const x = i % canvas.width;
        const y = (i / canvas.height) >>> 0;

        const r = 64 + (128 * x) / canvas.width + 64 * Math.sin(t / 1000);
        const g = 64 + (128 * y) / canvas.height + 64 * Math.cos(t / 1000);
        const b = 128;

        imageData.data[p + 0] = r;
        imageData.data[p + 1] = g;
        imageData.data[p + 2] = b;
        imageData.data[p + 3] = 255;
      }

      ctx.putImageData(imageData, 0, 0);
    }

    onCleanup(() => cancelAnimationFrame(frame));
  });

  return (
    <>
      <canvas ref={canvas} width="256" height="256" />
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
