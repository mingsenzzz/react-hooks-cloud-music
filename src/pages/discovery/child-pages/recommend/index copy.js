import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTopBannersAction } from "@/store/recommend/actionCreators";

const Recommend = (props) => {
  useEffect(() => {
    props.getBanners();
  }, []);
  return <div>Recommend{props.banners.length}</div>;
};

export default connect(
  (state) => {
    return { banners: state?.recommendReducer?.topBanners };
  },
  (dispatch) => {
    return {
      getBanners: () => {
        //当dispatch一个函数时，会执行回调函数，
        //并且在执行时，传入dispatch函数，在请求拿到结果之后，派发action
        dispatch(getTopBannersAction);
      },
    };
  }
)(Recommend);
