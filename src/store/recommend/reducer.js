import { CHANGE_TOP_BANNERS } from "./constants";
import { Map } from "immutable";
//把对象转换成immutable类型数据，这样可以优化性能
const initialState = Map({
  topBanners: [],
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    default:
      return state;
  }
}

export default reducer;
