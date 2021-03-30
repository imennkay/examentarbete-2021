import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Välkommen till Dracarys Gaming",
  description: "Vill du ha nytt gear till din dator?",
  keywords: "Gaming, dator, Spel",
};

export default Meta;
