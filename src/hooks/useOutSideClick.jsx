import { useEffect } from "react";

export default function useOutSideClick(ref, cb) {
  useEffect(() => {
    function handleOutSideClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    }
    document.addEventListener("mousedown", handleOutSideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref, cb]);
}
