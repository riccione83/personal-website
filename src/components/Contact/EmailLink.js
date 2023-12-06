import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

// Validates the first half of an email address.
const validateText = (text) => {
  // NOTE: Passes RFC 5322 but not tested on google's standard.
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
  return re.test(text) || text.length === 0;
};

const messages = [
  "Hi",
  "Hello",
  "Hola",
  "Ciao",
  "你好",
  "Hoi",
  "Saluton",
  "Haigh",
  "こんにちは",
  "안녕",
  "CZEŚĆ",
  "ПРИВІТ",
  "1️⃣2️⃣3️⃣🎉",
];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]);
};

const EmailLink = ({ loopMessage }) => {
  const hold = 20; // ticks to wait after message is complete before rendering next message
  const delay = 50; // tick length in mS

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(0); // points to current char
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(
    () => {
      let newIdx = idx;
      let newChar = char;
      if (char - hold >= messages[idx].length) {
        newIdx += 1;
        newChar = 0;
      }
      if (newIdx === messages.length) {
        newIdx = 0;
        updateMessage(messages[newIdx].slice(0, newChar));
        updateIter(newIdx);
        updateChar(newChar + 1);
        if (loopMessage) {
          updateIter(0);
          updateIter(0);
          updateChar(0);
        }
      } else {
        updateMessage(messages[newIdx].slice(0, newChar));
        updateIter(newIdx);
        updateChar(newChar + 1);
      }
    },
    isActive ? delay : null
  );

  return (
    <div
      className="inline-container"
      style={validateText(message) ? {} : { color: "red" }}
      onMouseEnter={() => setIsActive(false)}
      onMouseLeave={() => idx < messages.length && setIsActive(true)}
    >
      <span>{message},</span>
    </div>
  );
};

EmailLink.defaultProps = {
  loopMessage: false,
};

EmailLink.propTypes = {
  loopMessage: PropTypes.bool,
};

export default EmailLink;
