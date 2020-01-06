import React, { useState } from "react";
import ReactPdf from "@react-pdf/renderer";
import useWindowSize from "../hooks/useWindowSize.js";

const Resume = () => {
  const windowHeight = useWindowSize().height;

  console.log(windowHeight);

  return (
    <div>
      <iframe
        src="https://docs.google.com/viewer?url=https://github.com/mrprofessor/resume/raw/master/rudra_narayan_resume.pdf&embedded=true"
        frameBorder="0"
        style={{ overflow: "hidden", height: windowHeight, width: "100%" }}
      ></iframe>
    </div>
  );
};

export default Resume;
