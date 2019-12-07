import React from "react";

const CustomButton = ({ text, link }) => {
  const onClick = () => {
    if (link) window.open(link, "_blank");
  };

  let isDisabled = false;
  let class_name = "custom-button";
  if (!link) {
    isDisabled = true;
    class_name = "custom-button custom-button-disabled";
  }

  return (
    <button className={class_name} onClick={onClick} disabled={isDisabled}>
      {text}
    </button>
  );
};

export default CustomButton;
