import React from "react";
import { Button } from "antd";

const TeamInputCall = ({ value, onChange, color }) => {
  const getButtonStyle = (color) => {
    return {
      backgroundColor: color,
      width: "100%",
      border: value === color ? "2px solid magenta" : "none",
    };
  };

  return (
    <Button
      style={getButtonStyle(color)}
      onClick={() => onChange(color)}
      disabled={value === color}
    >
      {color.charAt(0).toUpperCase() + color.slice(1)}
    </Button>
  );
};

export default TeamInputCall;
