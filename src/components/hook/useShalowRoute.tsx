"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function useShallowRoute() {
  // Use PascalCase for function names
  const [shallowRouteState, setShallowRouteState] = useState("");
  const pathname = usePathname();

  const shallowRoute = {
    push: (url: string) => {
      if (typeof window === "undefined") return; // Strict equality check

      // Use history.pushState for correct shallow routing:
      history.pushState({}, "", url);

      // Trigger a custom event for potential side effects:
      const historyEvent = new CustomEvent("shallowRouteChange", {
        detail: url,
      }); // Descriptive event name
      window.dispatchEvent(historyEvent);
    },
  };

  useEffect(() => {
    const handleShallowRouteChange = (event: { detail: string }) => {
      const newUrl = event.detail;
      console.log("change ep");
      setShallowRouteState(newUrl);
      // Perform actions based on the shallow route change
    };

    window.addEventListener(
      "shallowRouteChange",
      handleShallowRouteChange as any
    );

    return () => {
      // Cleanup function to remove the event listener when the component unmounts
      window.removeEventListener(
        "shallowRouteChange",
        handleShallowRouteChange as any
      );
    };
  }, []);

  return { shallowRoute, shallowRouteState };
}
