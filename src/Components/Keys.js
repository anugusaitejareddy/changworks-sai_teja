import React from "react";
import { HotKeys } from "react-hotkeys";
import confetti from "canvas-confetti";
import { configure } from "react-hotkeys";

import "./Keys.css";

configure({
  ignoreTags: []
});

const keyMap = {
  up: "c h a n g w o r k s",
  a: "a"
};

const handlers = {
  up: () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  },
};

function Keys() {
  return (
      <div className="Keys">
        <HotKeys class="hotKeys" keyMap={keyMap} handlers={handlers}>
            <input placeholder='Type "changworks"' />
        </HotKeys>
      </div>
    
  );
}

export default Keys;
