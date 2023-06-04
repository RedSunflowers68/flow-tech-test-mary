import React, { useMemo } from "react";
import { TradeType } from "../../types/Trade";
import { Title } from "../../styles/Typogragphy.styles";
import { FlexCenteredWrapper } from "../../styles/Wrappers.styles";
import DataTable from "react-data-table-component";
import moment from "moment";

interface TradeProps {
  trades: TradeType[];
  title: string;
}

const columns = [
  {
    name: "ID Number",
    selector: (row: TradeType) => row.id,
  },
  {
    name: "Time",
    selector: (row: TradeType) => row.time,
    sortable: true,
  },
  {
    name: "Price",
    selector: (row: TradeType) => row.price,
    sortable: true,
  },
  {
    name: "Quantity",
    selector: (row: TradeType) => row.qty,
    sortable: true,
  },
  {
    name: "Quote Quantity",
    selector: (row: TradeType) => row.quoteQty,
  },
];

export const Trades = ({ trades, title }: TradeProps) => {
  const data = useMemo(() => {
    return trades.map((trade) => {
      if (trade.price) {
        trade.price = parseFloat(trade.price).toString();
      }
      if (trade.time && typeof trade.time === "number") {
        trade.time = moment.unix(trade.time).format("LTS");
      }
      return trade;
    });
  }, [trades]);

  return (
    <>
      <FlexCenteredWrapper>
        <Title>{title}</Title>
      </FlexCenteredWrapper>
      <div style={{ marginTop: "20px" }}>
        <DataTable
          columns={columns}
          data={data}
          pagination
          responsive
          defaultSortFieldId="Price"
        />
      </div>
    </>
  );
};
