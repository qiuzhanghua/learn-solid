import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, fireEvent, screen } from "@solidjs/testing-library";
import Counter from "./Counter";

describe("<Counter />", () => {
  afterEach(() => cleanup());

  it("Mount", async () => {
    const { container } = render(Counter);
    expect(container).toBeTruthy();
    // expect(container.innerHTML).toContain("<button>0</button>");
    // expect(container.innerHTML).toMatchSnapshot()
  });

  it("Click", async () => {
    render(Counter);
    const btn = screen.queryAllByRole("button")[0];
    // screen.getByTestId("inc");
    const cs = btn.innerHTML;
    const c = parseInt(cs) || 0;
    fireEvent.click(btn);
    expect(btn.innerHTML).toBe((c + 1).toString());
    fireEvent.click(btn);
    expect(btn.innerHTML).toBe((c + 2).toString());
  });
});
