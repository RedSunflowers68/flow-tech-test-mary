export interface SymbolFilter {
  filterType: string;
  minPrice: string;
  maxPrice: string;
  tickSize: string;
  minQty: string;
  maxQty: string;
  stepSize: string;
  minNotional: string;
  applyToMarket: boolean;
  avgPriceMins: number;
  limit: number;
  minTrailingAboveDelta: number;
  maxTrailingAboveDelta: number;
  minTrailingBelowDelta: number;
  maxTrailingBelowDelta: number;
  bidMultiplierUp: string;
  bidMultiplierDown: string;
  askMultiplierUp: string;
  askMultiplierDown: string;
  maxNumOrders: number;
  maxNumAlgoOrders: number;
}
