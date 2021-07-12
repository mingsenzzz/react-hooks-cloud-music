import React, { memo } from "react";
import TopBanner from "./top-banner";
import RecommentContent from "./content";
const Recommend = (props) => {
  return (
    <div>
      <TopBanner />
      <RecommentContent />
    </div>
  );
};

export default memo(Recommend);
