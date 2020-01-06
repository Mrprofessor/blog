import React, { useState } from "react";
import ReactPdf from "@react-pdf/renderer";
import useWindowSize from "../hooks/useWindowSize.js";

const Resume = () => {
  const windowHeight = useWindowSize().height;

  return (
    <div style={{ margin: 0, padding: 0, overflow: "hidden" }}>
      <iframe
        src="https://docs.google.com/viewer?url=https://github.com/mrprofessor/resume/raw/master/rudra_narayan_resume.pdf&embedded=true"
        frameborder="0"
        style={{ overflow: "hidden", height: windowHeight, width: "100%" }}
      ></iframe>
    </div>
  );
};

export default Resume;
