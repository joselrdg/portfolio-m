import React from "react";

export const MirrorText = ({ text, size = 4 }) => {
  return (
    <>
      <h1 className="titleMirror" >
        {text}
      </h1>
    </>
  );
};
