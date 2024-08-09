import React from "react";

const DarkOverlay = ({ children }) => {
  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 9999,
  };

  const containerStyle = {
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    padding: "0px",
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle} />
      {children}
    </div>
  );
};

export default DarkOverlay;
