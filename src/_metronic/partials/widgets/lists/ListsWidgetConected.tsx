/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { Dropdown1 } from "../../content/dropdown/Dropdown1";
import Google from "../../../../app/modules/admin/assets/google-icon 2.svg";
import Slack from "../../../../app/modules/admin/assets/slack-new-logo 1.svg";
import Upto from "../../../../app/modules/admin/assets/upto.svg";
import Face from "../../../../app/modules/admin/assets/face.svg";
import GreenTick from "../../../../app/modules/admin/assets/greenTick.svg";

type Props = {
  className: string;
};

const ListsWidgetConected: React.FC<Props> = ({ className }) => {
  return (
    <div className={`card ${className}`}>
      <div
        className="card-header"
        style={{ borderBottom: "1px solid #EFF2F5", marginBottom: "10px" }}
      >
        <h3 className="card-title fw-bolder text-dark">Connected Accounts</h3>
        <div className="card-toolbar">
          <button
            type="button"
            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            {/* <KTSVG
              path="/media/icons/duotune/general/gen024.svg"
              className="svg-icon-2"
            /> */}
          </button>
          <Dropdown1 />
        </div>
      </div>
      <div className="card-body pt-2 conected-oveview">
        <div className="d-flex align-items-center mb-12 box-container">
          <div className="symbol symbol-25px me-5">
            <img src={Google} className="" alt="" />
          </div>

          <div className="flex-grow-1">
            <a href="#" className="text-dark fw-bolder text-hover-primary fs-6">
              Google <img src={GreenTick} className="" alt="" />
            </a>
            <span className="text-muted d-block fw-bold">
              david@ourmethod.com
            </span>
          </div>
        </div>

        <div className="d-flex align-items-center mb-12 box-container">
          <div className="symbol  symbol-45px me-5">
            <img
              // src={toAbsoluteUrl("/media/avatars/150-12.jpg")}
              src={Upto}
              className=""
              alt=""
            />
          </div>

          <div className="flex-grow-1">
            <a href="#" className="text-dark fw-bolder text-hover-primary fs-6">
              Follow Up Boss <img src={GreenTick} className="" alt="" />
            </a>
            <span className="text-muted d-block fw-bold">
              david@ourmethod.com
            </span>
          </div>
        </div>

        <div className="d-flex align-items-center box-container">
          <div className="symbol  symbol-25px me-5">
            <img
              // src={toAbsoluteUrl("/media/avatars/150-8.jpg")}
              src={Slack}
              className=""
              alt=""
            />
          </div>

          <div className="flex-grow-1">
            <a href="#" className="text-dark fw-bolder text-hover-primary fs-6">
              Slack <img src={GreenTick} className="" alt="" />
            </a>
            <span className="text-muted d-block fw-bold">@davidb</span>
          </div>
        </div>

        <div className="d-flex align-items-center box-container">
          <div className="symbol  symbol-45px me-5">
            <img
              // src={toAbsoluteUrl("/media/avatars/150-6.jpg")}
              src={Face}
              className=""
              alt=""
            />
          </div>

          <div className="flex-grow-1">
            <a href="#" className="text-dark fw-bolder text-hover-primary fs-6">
              RealGeeks <img src={GreenTick} className="" alt="" />
            </a>
            <span className="text-muted d-block fw-bold">
              david@ourmethod.com
            </span>
          </div>
        </div>
      </div>
      {/* end::Body */}
    </div>
  );
};

export { ListsWidgetConected };
