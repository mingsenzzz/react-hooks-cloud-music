import { CHANGE_TOP_BANNERS, CHANGE_HOT_RECOMMEND_LIST } from "./constants";
import {
  getTopBannersRequest,
  getHotRecommendList,
} from "@/services/recommend";

//真正的同步action
const realGetTopBannersAction = (topBanners) => {
  return {
    type: CHANGE_TOP_BANNERS,
    topBanners,
  };
};

//异步的action
export const getTopBannersAction = (dispatch) => {
  getTopBannersRequest().then((res) => {
    dispatch(realGetTopBannersAction(res.banners || []));
  });
};

const realGetRecommendListAction = (hotRecommendList) => {
  return {
    type: CHANGE_HOT_RECOMMEND_LIST,
    hotRecommendList,
  };
};

export const getRecommendListAction = (dispatch) => {
  getHotRecommendList().then((res) => {
    console.log(res, "res");

    dispatch(realGetRecommendListAction);
  });
};
