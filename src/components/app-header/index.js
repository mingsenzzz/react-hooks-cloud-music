import React from "react";
import PropTypes from "prop-types";
import { headerLinks } from "@/common/local-data.js";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import { NavLink } from "react-router-dom";
const AppHeader = () => {
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link} key={index}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} key={index}>
          {item.title}
        </a>
      );
    }
  };

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="/" className="logo sprite_01">
            {" "}
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div className="select-item">{showSelectItem(item, index)}</div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>right</HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
};

AppHeader.propTypes = {};

export default AppHeader;
