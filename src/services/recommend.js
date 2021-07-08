import request from "./axios";
export function getTopBannersRequest(params) {
  return request({
    url: "/banner",
    params: {},
  });
}
