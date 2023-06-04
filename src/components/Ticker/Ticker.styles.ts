import styled from "styled-components";

export const TickerWrapper = styled.div`
  height: 60px;
  box-sizing: content-box;

  .ticker_content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    line-height: 20px;
    white-space: nowrap;
    box-sizing: content-box;
    padding-bottom: 10px;
  }

  .ticker_item {
    font-size: 15px;
    color: #808000;
    text-transform: capitalize;
    font-weight: 600;
    padding-right: 15px;
  }
`;
