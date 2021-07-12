import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RecommendListWrapper } from "./style";
import { getRecommendListAction } from "@/store/recommend/actionCreators";
const RecommendList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecommendListAction);
  }, [dispatch]);
  return <RecommendListWrapper></RecommendListWrapper>;
};

export default RecommendList;
