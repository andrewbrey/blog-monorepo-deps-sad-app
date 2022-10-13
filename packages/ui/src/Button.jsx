import { useId } from "react";

function noop() {}

export const Button = ({ action, children }) => {
  // -----
  // ⚠ ⚠ ⚠ this `id` const is gonna cause things to explode! ⚠ ⚠ ⚠
  // -----
  const id = useId();

  return (
    <button id={id} onClick={action ?? noop}>
      {children}
    </button>
  );
};
