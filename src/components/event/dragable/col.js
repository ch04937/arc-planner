import React from "react";

export default function Col({ isOver, children }) {
  const className = isOver ? "colhighlight-region" : "col";
  return <div className={className}>{children}</div>;
}
