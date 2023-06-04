import styled from "styled-components";

export const TickerWrapper = styled.div`
  .ticker_content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    line-height: 20px;
    white-space: nowrap;
    box-sizing: content-box;
    padding-bottom: 10px;
    align-items: center;
    justify-content: center;
  }

  .ticker_item {
    font-size: 15px;
    color: #808000;
    text-transform: capitalize;
    font-weight: 600;
    padding-right: 15px;
    @media (max-width: 768px) {
      font-size: 10px;
    }
  }
`;
