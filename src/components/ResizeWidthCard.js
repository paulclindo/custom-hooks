import React from "react";
import { Card } from "../Elements";
import purp from "../purp.png";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { useMeasure } from "../hooks/useMeasure";
import { useScript } from "../hooks/useScript";

const ResizeWidthCard = () => {
  const width = useWindowWidth();

  const [isLoaded, isError] = useScript(
    "https://www.google.com/recaptcha/api.js"
  );
  console.log(isLoaded, isError);
  // const [{ ref }, bounds] = useMeasure();

  if (width < 400) return null;
  if (!isLoaded) {
    return "Loading..";
  }
  return (
    // <Card ref={ref} style={{ background: "var(--purp)" }}>
    <Card style={{ background: "var(--purp)" }}>
      <h3>Some card</h3>
      <img src={purp} />
    </Card>
  );
};

export default ResizeWidthCard;
