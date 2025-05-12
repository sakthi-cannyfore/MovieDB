import React from "react";

type FormatDateProps = {
  dateString: any;
};

const FormatDate: React.FC<FormatDateProps> = ({ dateString }) => {
  const formattedDate = new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <span>{formattedDate}</span>;
};

export default FormatDate;
