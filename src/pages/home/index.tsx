import { Layout } from "./../../common/components";
import React from "react";
import Header from "./components/header";
import Wallets from "./components/wallets";
import ThisMothnChart from "./components/this-month-chart";
import Transactions from "./components/transactions";

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="pb-20">
        <Header />
        <Wallets />
        <ThisMothnChart />
        <Transactions />
      </div>
    </Layout>
  );
};

export default Home;
