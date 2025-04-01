import React from "react";
import { IVenda } from "../Context/DataContext";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type SaleDay = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

function transformData(data: IVenda[]): SaleDay[] {
  const dias = data.reduce(
    (previousValue: { [key: string]: SaleDay }, item) => {
      const dia = item.data.split(" ")[0];
      if (!previousValue[dia]) {
        previousValue[dia] = {
          data: dia,
          pago: 0,
          falha: 0,
          processando: 0,
        };
      }
      previousValue[dia][item.status] += item.preco;
      return previousValue;
    },
    {}
  );

  return Object.values(dias).map((dia) => ({...dia, data: dia.data.slice(5)}));
}

const GraphicSale = ({ data }: { data: IVenda[] }) => {
  const transformedData = transformData(data);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={transformedData}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#a36af9" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#fbcb21"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#000000"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraphicSale;
