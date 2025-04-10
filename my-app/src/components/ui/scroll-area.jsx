import React from "react";

export function ScrollArea({ children, className }) {
  return (
    <div className={`overflow-y-auto ${className}`} style={{ maxHeight: "100vh" }}>
      {children}
    </div>
  );
}
