import { CHANGE_TOP_BANNERS } from "./constants";
import { getTopBannersRequest } from "@/services/recommend";

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
