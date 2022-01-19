import { PageLink } from "../../../../_metronic/layout/core";

export const profileSubmenu: Array<PageLink> = [
  {
    title: "Overview",
    path: "/admin/overview",
    isActive: true,
  },
  {
    title: "Details",
    path: "/admin/overview",
    isActive: true,
    isSeparator: true,
  },
  {
    title: "Payments",
    path: "/admin/payment",
    isActive: false,
  },
  {
    title: "Tab",
    path: "/admin/tab",
    isActive: false,
    isSeparator: true,
  },
  {
    title: "Inventory",
    path: "/admin/inventory",
    isActive: false,
  },
  {
    title: "Traning",
    path: "/admin/training",
    isActive: false,
    isSeparator: true,
  },
];
