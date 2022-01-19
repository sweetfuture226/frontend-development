/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { KTSVG, toAbsoluteUrl } from "../../../../_metronic/helpers";

type Props = {
  dataVideo: any;
  title: any;
};

const Progress = ({ dataVideo, title }: Props) => {
  return (
    <div className="card notes mt-10">
      <div className="notes__contain pb-0">
        <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center mb-2">
              <a
                href="#"
                className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
              >
                {title}
              </a>
            </div>
          </div>
        </div>

        {/* begin::Body */}
        <div className="card-body py-3">
          <div className="table-responsive">
            <table className="table align-middle gs-0 gy-5">
              <thead>
                <tr>
                  <th className="w-150px"></th>
                  <th className="w-250px"></th>
                  <th className=""></th>
                  <th className="w-200px"></th>
                  <th className=""></th>
                </tr>
              </thead>
              <tbody>
                {dataVideo.map((o: any, index: number) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={o.img}
                        style={{ width: "136px", height: "80px" }}
                        className="align-self-center"
                        alt=""
                      />
                    </td>
                    <td>
                      <a href="#" className="mb-1 fs-6 title-video">
                        {o.title}
                      </a>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <div className="d-flex flex-column w-100 me-2">
                        <div className="d-flex flex-stack mb-2">
                          <span className="me-2 fs-7 ">{o.percent}%</span>
                          <span className="me-2 fs-7 ">3 of 7 Modules</span>
                        </div>
                        <div className="progress h-6px w-100">
                          <div
                            className="progress-bar "
                            role="progressbar"
                            style={{
                              width: `${o.percent}%`,
                              backgroundColor: "#000",
                              borderRadius: "6px",
                            }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <a href="#" className="text-dark  mb-1 fs-6">
                        {o.hours}
                      </a>
                      <span className="text-dark  d-block fs-7">Hours ago</span>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <a href="#" className="text-dark mb-1 fs-6">
                        {o.date}
                      </a>
                      <span className="text-dark d-block fs-7">{o.time}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* end::Table body */}
            </table>
            {/* end::Table */}
          </div>
          {/* end::Table container */}
        </div>
      </div>
    </div>
  );
};

export default Progress;
