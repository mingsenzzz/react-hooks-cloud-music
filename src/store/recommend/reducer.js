import { CHANGE_TOP_BANNERS } from "./constants";
const initialState = {
  topBanners: [],
};

function reducer(state = initialState, action) {
  console.log(action, "action");
  console.log(action.topBanners, "topBanners111");
  switch (action.type) {
    case CHANGE_TOP_BANNERS:
      return { ...state, topBanners: action.topBanners };
    default:
      return state;
  }
}

export default reducer;
