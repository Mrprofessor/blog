import React from "react";

// TODO
// Add proptypes check
// description is a node
const CustomCard = ({ header, description, footer }) => {
  return (
    <div className="card">
      <article>
        <h4>{header}</h4>
        {description}
        {footer}
      </article>
    </div>
  );
};

export default CustomCard;
