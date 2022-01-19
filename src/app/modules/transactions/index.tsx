import React from "react";
import { Route, Switch } from "react-router-dom";
import { PageLink, PageTitle } from "../../../_metronic/layout/core";
import Listings from "./components/Listings";

const transactionsBreadCrumbs: Array<PageLink> = [
  {
    title: "Listings",
    path: "/transactions/listings",
    isSeparator: false,
    isActive: false,
  },
  {
    title: "",
    path: "",
    isSeparator: true,
    isActive: false,
  },
];

const TransactionsPage: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route path="/transactions/listings">
          <PageTitle breadcrumbs={transactionsBreadCrumbs}>Listings</PageTitle>
          <Listings />
        </Route>
      </Switch>
    </div>
  );
};

export default TransactionsPage;
