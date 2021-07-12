import React from "react";
import { RecommendContentWraper } from "./styles";
import ContentLeft from "./content-left";
import ContentRight from "./content-right";
const RecommentContent = () => {
  return (
    <RecommendContentWraper>
      <ContentLeft />
      <ContentRight />
    </RecommendContentWraper>
  );
};

export default RecommentContent;
