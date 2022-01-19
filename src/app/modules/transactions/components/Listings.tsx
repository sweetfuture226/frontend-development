import React from "react";
import { Link } from "react-router-dom";

const Listings = () => {
  return (
    <div className="card notes">
      <div className="card-body py-3">
        <div className="table-responsive">
          <table className="table align-middle gs-0 gy-5">
            <thead>
              <tr className="fw-bolder text-dark border-bottom border-dark">
                <th className="min-w-150px">Address</th>
                <th className="min-w-140px text-center">Status</th>
                <th className="min-w-120px text-center">Agent</th>
                <th className="min-w-150px text-center">Progress</th>
                <th className="min-w-120px text-center">List Price</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-bottom">
                <td>
                  <Link
                    to="/"
                    className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                  >
                    1232 Clear Pond Lane
                  </Link>
                  <p className="text-muted fw-bold text-muted d-block fs-7 mb-0">
                    Atlanta, GA 30084
                  </p>
                </td>
                <td>
                  <div className="text-center">
                    <button className="btn btn-sm btn-dark">
                      Active
                    </button>
                  </div>
                </td>
                <td>
                  <p className="mb-0 text-dark fw-bolder fs-6 text-center">
                    Cary Blumenfeld
                  </p>
                </td>
                <td>
                  <div className="d-flex flex-column w-100 me-2">
                    <div className="d-flex flex-stack mb-2">
                      <span className="me-2 fs-7 ">{10}%</span>
                      <span className="me-2 fs-7 ">{"5 of 7 Documents"}</span>
                    </div>
                    <div className="progress h-6px w-100">
                      <div
                        className="progress-bar "
                        role="progressbar"
                        style={{
                          width: `${10}%`,
                          backgroundColor: "#000",
                        }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="mb-0 text-dark fw-bolder fs-6 text-center">
                    $9,999
                  </p>
                </td>
              </tr>

              <tr className="border-bottom">
                <td>
                  <Link
                    to="/"
                    className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                  >
                    4119 Sampleprop Circle
                  </Link>
                  <p className="text-muted fw-bold text-muted d-block fs-7 mb-0">
                    Atlanta, GA 30084
                  </p>
                </td>
                <td>
                  <div className="text-center">
                    <button className="btn btn-sm btn-outline border-dark">
                      Under Contract
                    </button>
                  </div>
                </td>
                <td>
                  <p className="mb-0 text-dark fw-bolder fs-6 text-center">
                    Some Agentname
                  </p>
                </td>
                <td>
                  <div className="d-flex flex-column w-100 me-2">
                    <div className="d-flex flex-stack mb-2">
                      <span className="me-2 fs-7 ">{30}%</span>
                      <span className="me-2 fs-7 ">{"5 of 7 Documents"}</span>
                    </div>
                    <div className="progress h-6px w-100">
                      <div
                        className="progress-bar "
                        role="progressbar"
                        style={{
                          width: `${30}%`,
                          backgroundColor: "#000",
                        }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="mb-0 text-dark fw-bolder fs-6 text-center">
                    $2,999,000
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Listings;
