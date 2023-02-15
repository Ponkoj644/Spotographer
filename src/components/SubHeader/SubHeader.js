import React from "react";
import SubImage from "../../images/subheader-img.jpg";
import "./SubHeader.css";

const SubHeader = () => {
  return (
    <section className="sub-header">
      <img src={SubImage} alt="" className="w-100" />
    </section>
  );
};

export default SubHeader;
