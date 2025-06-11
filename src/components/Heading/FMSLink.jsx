// FMSLink.js
import React from "react";
import { Link } from "react-router-dom";

const FMSLink = ({ children }) => {
  // Replace 'FMS' with the Link component
  const modifiedText = children.split("FMS").map((part, index) =>
    index === 1 ? (
      <Link
        to="http://fourmoresupports.com.au/ "
        key={index}
        style={{ textDecoration: "none", color: "#E9BC03" }}
        target="blank"
      >
        FMS
      </Link>
    ) : (
      part
    )
  );

  return <>{modifiedText}</>;
};

export default FMSLink;
