import React from "react";
import {
  ListsWidget5,
  ListsWidgetConected,
} from "../../../../_metronic/partials/widgets";
import Blocks from "../assets/Layout-4-blocks.svg";
import SpecificNotes from "./Specific";

export function Overview() {
  const data = [
    { img: Blocks, total: "8,345", description: "New Customers" },
    { img: Blocks, total: "8,345", description: "New Customers" },
    { img: Blocks, total: "8,345", description: "New Customers" },
    { img: Blocks, total: "8,345", description: "New Customers" },
  ];

  return (
    <div className="row g-5 g-xxl-8">
      <div className="col-xl-6">
        <ListsWidgetConected className="mb-5 mb-xxl-8" />
      </div>

      <div className="col-xl-6 box-left-custom">
        {data.map((o, index) => (
          <div className="card box-customers" key={index}>
            <div>
              <img src={o.img} />
            </div>
            <h2>{o.total}</h2>
            <p>{o.description}</p>
          </div>
        ))}
      </div>
      <div className="col-xl-12">
        <SpecificNotes />
      </div>
    </div>
  );
}
