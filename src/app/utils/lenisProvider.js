// components/lenis-provider.js
import { Lenis as ReactLenis } from "@studio-freight/react-lenis";
import React from "react";

export function LenisProvider({
  children,
  options,
  ...props
}) {
  return (
    React.createElement(ReactLenis, { root: true, ...props },
      children
    )
  );
}
