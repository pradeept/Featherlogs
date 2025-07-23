import React from "react";
import { ClimbingBoxLoader } from "react-spinners";

function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10
      }}
    >
      <ClimbingBoxLoader color='white' />
    </div>
  );
}

export default Loading;
