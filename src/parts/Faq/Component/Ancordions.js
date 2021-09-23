import React, { useState } from "react";
// export { default as Item } from "./Item";

export default function Accordion({ children }) {
  const [Active, setActive] = useState(null);
  function Toggle(id) {
    setActive((prev) => (prev === id ? null : id));
  }
  return <div className="accordion">{children(Active, Toggle)}</div>;
}
