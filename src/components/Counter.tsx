import { createEffect, createMemo, createSignal, onCleanup } from "solid-js";

function fibonacci (num: number): number {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

export default function Counter () {
  const cs = localStorage.getItem("savedCount") || "0";
  const c = parseInt(cs) || 0;
  const [count, setCount] = createSignal(c);
  const Inc = () => {
    setCount(count() + 1);
    localStorage.setItem("savedCount", count().toString());
  };
  const Reset = () => {
    setCount(0);
    localStorage.setItem("savedCount", "0");
  };

  createEffect(() => {
    document.title = `You clicked ${count()} times`;
  }, 1);

  const fib = createMemo(() => {
    console.log("Calculating Fibonacci " + count());
    return fibonacci(count());
  });

  // const timer = setInterval(() => setCount(count() + 1), 1000);
  //
  // onCleanup(() => clearInterval(timer));

  return (
    <>
      <button
        type="button"
        onClick={Inc}
        class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-6"
      >
        {count()}
      </button>
      <button
        type="button"
        onClick={Reset}
        class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-6"
      >
        Reset
      </button>
      <p />
      Fibonacci of {count()} is {fib()}
      <p />
      Another Fibonacci of {count()} is {fib()}
    </>
  );
}
