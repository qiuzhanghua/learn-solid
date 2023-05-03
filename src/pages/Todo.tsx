import { createSignal, For, onMount } from "solid-js";
import { createStore } from "solid-js/store";

export default function () {
  const [todos, setTodos] = createStore([]);
  let input: HTMLInputElement | undefined;
  let todoId = 0;

  const addTodo = (text) => {
    setTodos([...todos, { id: ++todoId, text, completed: false }]);
  };
  const toggleTodo = (id) => {
    setTodos(
      (todo) => todo.id === id,
      "completed",
      (completed) => !completed
    );
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  onMount(() => {
    input!.focus();
  });

  // const onInput: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {
  //   console.log("input changed to", event.currentTarget.value);
  // };

  return (
    <>
      <div>
        <input
          ref={input}
          class="focus:bg-blue-300 border-silver-500 border-2 rounded-md"
          // onInput={onInput}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              if (!input.value.trim()) return;
              addTodo(input.value);
              input.value = "";
              input.focus();
            }
          }}
        />
        <button
          class={"btn btn-primary"}
          onClick={(e) => {
            if (input.value.trim()) {
              addTodo(input.value);
            }
            input.value = "";
            input.focus();
          }}
        >
          Add Todo
        </button>
      </div>
      <For each={todos}>
        {(todo) => {
          const { id, text } = todo;
          console.log(`Creating ${text}`);
          return (
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={[toggleTodo, id]}
              />
              <span
                style={{
                  "text-decoration": todo.completed ? "line-through" : "none"
                }}
              >
                {text}
              </span>
              <button class="btn" onClick={[removeTodo, id]}>
                X
              </button>
            </div>
          );
        }}
      </For>
    </>
  );
}
