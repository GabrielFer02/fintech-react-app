import GraphicSale from "../Components/GraphicSale";
import { useDataContext } from "../Context/DataContext";

const Resume = () => {
  const { data } = useDataContext();

  if (!data) return null;
  return (
    <section>
      <div className="resume flex mb">
        <div className="box">
          <h2>Vendas</h2>
          <span>
            {data
              .reduce((previousValue, item) => previousValue + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <h2>Recebido</h2>
          <span>
            {data
              .filter((item) => item.status !== "falha")
              .reduce((previousValue, item) => previousValue + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <h2>Processando</h2>
          <span>
            {data
              .filter((item) => item.status === "processando")
              .reduce((previousValue, item) => previousValue + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
      </div>
      <div className="box mb">
        <GraphicSale data={data}/>
      </div>
    </section>
  );
};

export default Resume;
