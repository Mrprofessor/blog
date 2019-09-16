import React from "react";

const CustomCard = ({ header, description, footer }) => {
  return (
    <div className="card">
      <article>
        <h4>{header}</h4>
        <p>{description}</p>
        {footer}
      </article>
    </div>
  );
};

export default CustomCard;
