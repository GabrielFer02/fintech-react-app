import { useDataContext } from "../Context/DataContext";
import SalesItem from "../Components/SalesItem";

const Sales = () => {
  const { data } = useDataContext();

  if (!data) return null;
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <SalesItem venda={item} />
        </li>
      ))}
    </ul>
  );
};

export default Sales;
