import React from "react";
import "./style.css";

// This component exports both the List and ListItem components using 'children' as a catchAll for various props

export const List = ({ children }) => (
  <ul className="list-group">
    {children}
  </ul>
);

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
