import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Carousel } from "antd";

import { getTopBannersAction } from "@/store/recommend/actionCreators";
import {
  TopBannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl,
} from "./style";
const TopBanner = () => {
  const [currBac, setCurrbac] = useState(0);
  const carousel = useRef(null);
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

  const beforeBannerChange = useCallback(
    (from, to) => {
      setCurrbac(topBanners[to]?.imageUrl);
    },
    [topBanners]
  );

  useEffect(() => {
    dispatch(getTopBannersAction);
  }, [dispatch]);
  return (
    <TopBannerWrapper bgImage={currBac + "?imageView&blur=40x20"}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            ref={carousel}
            autoplay={true}
            beforeChange={beforeBannerChange}
          >
            {topBanners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    src={item.imageUrl}
                    className="image"
                    alt={item.typeTitle}
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl className="control">
          <button
            className="btn left"
            onClick={() => {
              carousel.current.prev();
            }}
          ></button>
          <button
            className="btn right"
            onClick={() => {
              carousel.current.next();
            }}
          ></button>
        </BannerControl>
      </div>
    </TopBannerWrapper>
  );
};

export default TopBanner;
