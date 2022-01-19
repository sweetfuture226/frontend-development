import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ProfileAdmin from "./components/ProfileAdmin";
import { PageLink, PageTitle } from "../../../_metronic/layout/core";
import { Overview } from "./components/Overview";
import Training from "./components/Training";

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: "Admin",
    path: "/admin/overview",
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

const Admin: React.FC = () => {
  return (
    <>
      <ProfileAdmin />
      <Switch>
        <Route path="/admin/overview">
          <PageTitle breadcrumbs={profileBreadCrumbs}>Overview</PageTitle>
          <Overview />
        </Route>
        <Route path="/admin/training">
          <PageTitle breadcrumbs={profileBreadCrumbs}>Traning</PageTitle>
          <Training />
        </Route>
        {/*<Route path="/admin/campaigns">
          <PageTitle breadcrumbs={profileBreadCrumbs}>Campaigns</PageTitle>
          <Campaigns />
        </Route>
        <Route path="/admin/documents">
          <PageTitle breadcrumbs={profileBreadCrumbs}>Documents</PageTitle>
          <Documents />
        </Route>
        <Route path="/admin/connections">
          <PageTitle breadcrumbs={profileBreadCrumbs}>Connections</PageTitle>
          <Connections />
        </Route> */}
        <Redirect from="/admin" exact={true} to="/admin/overview" />
        {/* <Redirect to="/admin/overview" /> */}
      </Switch>
    </>
  );
};

export default Admin;
