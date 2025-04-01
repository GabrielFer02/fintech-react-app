import React from "react";
import "./Main.css";
import Header from "./Components/Header";
import SideNav from "./Components/SideNav";
import Resume from "./Pages/Resume";
import { DataContextProvider } from "./Context/DataContext";
import Sales from "./Pages/Sales";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sale from "./Pages/Sale";

const App = () => {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <SideNav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Resume />} />
              <Route path="/vendas" element={<Sales />} />
              <Route path="/vendas/:id" element={<Sale />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
};
export default App;
