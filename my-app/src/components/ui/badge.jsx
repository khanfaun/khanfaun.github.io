import React from "react";

export function Badge({ children }) {
  return (
    <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded">
      {children}
    </span>
  );
}
