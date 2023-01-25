import { useEffect, useRef } from "react";

export default function useRenderCount() {
  const count = useRef(1);
  useEffect(() => {
    // async function increaseCount() {
    count.current++;
    // }

    //     increaseCount();
  });
  return count.current;
}
