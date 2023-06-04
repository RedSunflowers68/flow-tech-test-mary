import React, { useEffect, useState } from "react";
import { GlobalStyles } from "./styles/Global.styles";
import { Error, Title } from "./styles/Typogragphy.styles";
import {
  FlexCenteredWrapper,
  MainWrapper,
  SectionWrapper,
} from "./styles/Wrappers.styles";
import { SelectCurrency } from "./components/SelectCurrency/SelectCurrency";
import { CurrencyPairs } from "./types/CurrencyPairs";
import { Ticker } from "./components/Ticker/Ticker";
import { TickerType } from "./types/Ticker";
import { BASE_API_URL } from "./utils/binance";
import { TradeType } from "./types/Trade";
import { Loader } from "./shared/loader/Loader";
import { Trades } from "./components/Trades/Trades";
import axios, { CancelTokenSource } from "axios";

function App() {
  const [ticker, setTicker] = useState<TickerType>({} as TickerType);
  const [ticker24h, setTicker24h] = useState<TickerType>({} as TickerType);
  const [trades, setTrades] = useState<TradeType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [cancelToken, setCancelToken] = useState<CancelTokenSource | null>(
    null
  );

  useEffect(() => {
    return () => {
      if (cancelToken) {
        cancelToken.cancel();
      }
    };
  }, [cancelToken]);

  const getMarketData = (currency: string, crypto: string) => {
    setIsLoading(true);
    setError("");

    if (cancelToken) {
      cancelToken.cancel();
    }
    const newCancelToken = axios.CancelToken.source();
    setCancelToken(newCancelToken);

    const tickerRequest = axios.get(
      `${BASE_API_URL}ticker?symbol=${crypto}${currency}`,
      { cancelToken: newCancelToken.token }
    );
    const ticker24hRequest = axios.get(
      `${BASE_API_URL}ticker/24hr?symbol=${crypto}${currency}`,
      { cancelToken: newCancelToken.token }
    );
    const tradesRequest = axios.get(
      `${BASE_API_URL}trades?symbol=${crypto}${currency}`,
      { cancelToken: newCancelToken.token }
    );

    Promise.all([tickerRequest, ticker24hRequest, tradesRequest])
      .then(([tickerResponse, ticker24Response, tradesResponse]) => {
        setTicker(tickerResponse.data);
        setTicker24h(ticker24Response.data);
        setTrades(tradesResponse.data);
      })
      .catch((error) => {
        if (!axios.isCancel(error)) {
          setError(error.message);
          console.error(error);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleFormSubmit = (values: CurrencyPairs) => {
    const { currency, crypto } = values;

    if (currency && crypto) {
      getMarketData(currency, crypto);
    }
  };

  return (
    <>
      <GlobalStyles />
      <div className="app">
        <MainWrapper>
          <Title>Tech Test Flowdesk</Title>
          <p> Mary Kilduff</p>

          <SectionWrapper>
            <SelectCurrency handleFormSubmit={handleFormSubmit} />
          </SectionWrapper>

          {isLoading ? (
            <SectionWrapper>
              <FlexCenteredWrapper>
                <Loader />
              </FlexCenteredWrapper>
            </SectionWrapper>
          ) : error ? (
            <SectionWrapper>
              <FlexCenteredWrapper>
                <Error>Error has Occurred: {error}. </Error>
              </FlexCenteredWrapper>
            </SectionWrapper>
          ) : ticker && ticker24h && trades.length ? (
            <>
              <SectionWrapper>
                <Ticker ticker={ticker} title="Ticker" />
              </SectionWrapper>
              <SectionWrapper>
                <Ticker ticker={ticker24h} title="24h Ticker" />
              </SectionWrapper>
              <SectionWrapper>
                <Trades trades={trades} title="Trades" />
              </SectionWrapper>
            </>
          ) : (
            ""
          )}
        </MainWrapper>
      </div>
    </>
  );
}

export default App;
