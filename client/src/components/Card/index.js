// Every component follows a similar structure, importing the React library from the node module
// And any other components you need for the particular one you're working on
// Then export the component at the end fo the file to ensure the application can use it
import React from "react";

function Card({ icon, title, children }) {
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
