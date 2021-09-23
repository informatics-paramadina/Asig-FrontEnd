import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import {ReactComponent as ArrowDown} from 'assets/images/icon-arrow-down.svg';

export default function Item({ name, id, child, active, toggle, children }) {
  const [Height, setHeight] = useState(0);
  function calcHeight(ev) {
    setHeight(ev.offsetHeight);
  }
  return (
    <div className="border-b border-gray-700 overflow-hidden">
      <div className="meta pl-4 py-5 relative flex justify-between items-center">
        <span className="text-purple-600 font-bold text-lg">{name}</span>
        <button
          className="link-wrapped pr-5 focus:outline-none"
          onClick={() => toggle(id)}
        >
          {child && (
            <ArrowDown
              className={[
                "transition-all duration-300 transform",
                active === id ? "rotate-180" : "rotate-0",
              ].join(" ")}
            />
          )}
        </button>
      </div>
      <div
        className="transition-all duration-500"
        style={{ height: active === id ? Height : 0 }}
      >
        <CSSTransition
          in={active === id}
          timeout={500}
          onEnter={calcHeight}
          className="accordion-item"
        >
          <div className="accordion-item">
            <div className="py-2">{children}</div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}
