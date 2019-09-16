import React from "react";

const CustomButton = ({ text, link }) => {
  const onClick = () => {
    if (link) window.open(link, "_blank");
  };
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
