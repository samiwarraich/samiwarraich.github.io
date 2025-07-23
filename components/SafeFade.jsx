import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";

const SafeFade = ({ children, ...props }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>{children}</div>;
  }

  return <Fade {...props}>{children}</Fade>;
};

export default SafeFade;