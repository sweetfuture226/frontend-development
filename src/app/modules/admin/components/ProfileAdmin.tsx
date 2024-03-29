/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { KTSVG, toAbsoluteUrl } from "../../../../_metronic/helpers";
import { Link } from "react-router-dom";
import { Dropdown1 } from "../../../../_metronic/partials";
import { useLocation } from "react-router-dom";
import Person from "../assets/person.svg";

const ProfileAdmin: React.FC = () => {
  const location = useLocation();

  return (
    <div className="card mb-5 mb-xl-10">
      <div className="card-body pt-9 pb-0">
        <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
          <div className="me-7 mb-4">
            <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
              <img
                src={toAbsoluteUrl("/media/avatars/150-2.jpg")}
                alt="Metornic"
              />
              <div
                className="position-absolute translate-middle start-100 bg-success rounded-circle border border-4 border-white h-20px w-20px"
                style={{ bottom: "-15px" }}
              ></div>
            </div>
          </div>

          <div className="flex-grow-1">
            <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center mb-2">
                  <a
                    href="#"
                    className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
                  >
                    Andrew Leffler
                  </a>
                </div>

                <div className="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                  <a
                    href="#"
                    className="d-flex align-items-center text-hover-primary me-5 mb-2"
                    style={{ color: "#3F4254" }}
                  >
                    <img src={Person} style={{ marginRight: 8 }} />
                    Team Lead
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center text-hover-primary mb-2"
                    style={{ color: "#3F4254" }}
                  >
                    <img src={Person} style={{ marginRight: 8 }} />
                    andrew@ourmethod.com
                  </a>
                </div>
              </div>

              <div className="d-flex my-4">
                <a
                  href="#"
                  className="btn btn-sm btn-primary me-3"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_offer_a_deal"
                  style={{ backgroundColor: "#000", borderRadius: "6px" }}
                >
                  Create Task
                </a>
              </div>
            </div>

            <div className="d-flex flex-wrap flex-stack">
              <div className="d-flex flex-column flex-grow-1 pe-8">
                <div className="d-flex flex-wrap">
                  <div
                    className="rounded min-w-125px py-3 px-4 me-6 mb-3"
                    style={{ textAlign: "center" }}
                  >
                    <div className="d-flex align-items-center">
                      <div
                        className="fs-2 fw-500"
                        style={{
                          color: "#0B0B0C",
                          opacity: "0.7",
                          fontWeight: "500",
                        }}
                      >
                        $9,742,193
                      </div>
                    </div>

                    <div
                      className="fw-bold fs-6"
                      style={{ color: "#0B0B0C", opacity: "0.7" }}
                    >
                      YTD Volume
                    </div>
                  </div>
                  <div
                    className="rounded min-w-125px py-3 px-4 me-6 mb-3"
                    style={{ textAlign: "center" }}
                  >
                    <div
                      className="d-flex align-items-center"
                      style={{ justifyContent: "center" }}
                    >
                      <div
                        className="fs-2 fw-500"
                        style={{
                          color: "#0B0B0C",
                          opacity: "0.7",
                          fontWeight: "500",
                        }}
                      >
                        27
                      </div>
                    </div>
                    <div
                      className="fw-bold fs-6"
                      style={{
                        color: "#0B0B0C",
                        opacity: "0.7",
                        fontWeight: "500",
                      }}
                    >
                      Closed
                    </div>
                  </div>

                  <div
                    className="rounded min-w-125px py-3 px-4 me-6 mb-3"
                    style={{ textAlign: "center" }}
                  >
                    <div
                      className="d-flex align-items-center"
                      style={{ justifyContent: "center" }}
                    >
                      <div className="fs-2 fw-500">9</div>
                    </div>

                    <div
                      className="fw-bold fs-6"
                      style={{ color: "#0B0B0C", opacity: "0.7" }}
                    >
                      Pending
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
                <div className="d-flex justify-content-between w-100 mt-auto mb-2">
                  <span className="fw-bold fs-6 text-gray-400">
                    Profile Compleation
                  </span>
                  <span className="fw-bolder fs-6">50%</span>
                </div>
                <div className="h-5px mx-3 w-100 bg-light mb-3">
                  <div
                    className="bg-success rounded h-5px"
                    role="progressbar"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div
          className="d-flex overflow-auto h-55px"
          style={{ borderTop: "1px solid #EFF2F5", marginBottom: "9px" }}
        >
          <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap">
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 fw-500 ` +
                  (location.pathname === "/admin/overview" && "active")
                }
                to="/admin/overview"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  fontFamily: "Avenir Next",
                }}
              >
                Overview
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 fw-500 ` +
                  (location.pathname === "/admin/details" && "active")
                }
                to="/admin/details"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  fontFamily: "Avenir Next",
                }}
              >
                Details
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === "/admin/payment" && "active")
                }
                to="/admin/payment"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  fontFamily: "Avenir Next",
                }}
              >
                Payments
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === "/admin/tab" && "active")
                }
                to="/admin/tab"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  fontFamily: "Avenir Next",
                }}
              >
                Tab
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === "/admin/inventory" && "active")
                }
                to="/admin/inventory"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  fontFamily: "Avenir Next",
                }}
              >
                Inventory
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === "/admin/training" && "active")
                }
                to="/admin/training"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  fontFamily: "Avenir Next",
                }}
              >
                Training
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileAdmin;
