import { createEffect, children, JSX } from "solid-js";
import { ResolvedJSXElement } from "solid-js/types/reactive/signal";

// interface ColoredListProps {
//   color: string;
//   children: JSX.Element;
// }
// 不对？

export default function ColoredList (props) {
  const c = children(() => props.children) as () => (ResolvedJSXElement)[];
  createEffect(() => c().forEach((item: HTMLElement) => (item.style.color = props.color)));
  return <>{c()}</>;
}
