import React from "react";
import "./Card.scss";
import CompanyCard from "./CompanyCard";
import JobCard from "./JobCard";

function Card({ item = {}, apply = () => null, idx }) {
  if (item.handle) {
    return <CompanyCard company={item} />;
  } else {
    return <JobCard job={item} handleApply={() => apply(idx)} />;
  }
}

export default Card;
