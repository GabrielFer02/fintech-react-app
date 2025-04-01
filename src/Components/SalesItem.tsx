import React from "react";
import { IVenda } from "../Context/DataContext";
import { NavLink } from "react-router-dom";

const SalesItem = ({ venda }: { venda: IVenda }) => {
  return (
    <div className="sale box">
      <NavLink to={`/vendas/${venda.id}`} style={{ fontFamily: "monospace" }}>
        {venda.id}
      </NavLink>
      <div>{venda.nome}</div>
      <div>
        {venda.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default SalesItem;
