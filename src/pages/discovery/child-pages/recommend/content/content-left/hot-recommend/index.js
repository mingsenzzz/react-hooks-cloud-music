import React from "react";
import { withRouter } from "react-router";
import { HotRecommendWraper, Header } from "./style";
import { headerList } from "./config";
import RecommendList from "./recommendList";
const HotRecommend = (props) => {
  const { history } = props;
  return (
    <HotRecommendWraper>
      <Header>
        <div className="headerC">
          <span className="sprite_02" />
          {headerList.map((item, index) => {
            return (
              <span
                className={item.className}
                onClick={() => {
                  history.push({
                    pathname: "/discovery/songs",
                  });
                }}
                key={index}
              >
                {item.name}
                {item.hasDivider && <span className="divider">|</span>}
              </span>
            );
          })}
        </div>
        <div className="more smallText">
          <span>更多</span>
          <i className="icon sprite_02"></i>
        </div>
      </Header>
      <RecommendList />
    </HotRecommendWraper>
  );
};

export default withRouter(HotRecommend);
