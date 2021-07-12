import styled from "styled-components";

export const HotRecommendWraper = styled.div``;

export const Header = styled.div`
  border-bottom: 2px solid #c10d0c;
  display: flex;
  align-items: center;
  padding: 0 10px 0 4px;
  justify-content: space-between;
  .headerC {
    height: 33px;
  }
  .hotRText {
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
    margin-right: 16px;
  }
  .smallText {
    font-size: 12px;
    color: #666;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  .divider {
    margin: 0 14px;
  }
  .icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 4px;
    background-position: 0 -240px;
  }
`;
