import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getTopBannersAction } from "@/store/recommend/actionCreators";

const Recommend = (props) => {
  const dispatch = useDispatch();
  // useSelector，有个缺陷，它接受第一个参数是一个回调函数，
  //决定渲染不渲染在于return的对象与之前的对象是否 ===，但是函数每一次执行，返回的对象都不一样，
  //所以每一个都会渲染，所以需要传入第二个参数，不只是简单的进行 === 比较，
  const { topBanners } = useSelector((state) => {
    //因为要从immutable中取出属性，所以需要使用get方法
    //1.
    // return { topBanners: state.get('recommendReducer').get("topBanners") };
    //2.
    return { topBanners: state.getIn(["recommendReducer", "topBanners"]) };
  }, shallowEqual);
  useEffect(() => {
    dispatch(getTopBannersAction);
  }, [dispatch]);
  return <div>Recommend{topBanners?.length}</div>;
};

export default Recommend;
