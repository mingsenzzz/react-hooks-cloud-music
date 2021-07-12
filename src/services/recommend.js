import request from "./axios";
export function getTopBannersRequest(params) {
  return request({
    url: "/banner",
    params: {},
  });
}

export function getHotRecommendList() {
  return request({
    url: "/personalized",
  });
}
