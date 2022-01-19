/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../helpers";
import Menus from "../../core/Menus";
import { Header } from "./Header";

export function HeaderWrapper() {
  return (
    <div id="kt_header" className="header">
      {/*begin::Header top*/}
      <div className="header-top d-flex align-items-stretch flex-grow-1 bg-dark">
        {/*begin::Container*/}
        <div className="d-flex container-xxl w-100">
          {/*begin::Wrapper*/}
          <div className="d-flex flex-stack align-items-stretch w-100">
            {/*begin::Brand*/}
            <div className="d-flex align-items-center align-items-lg-stretch me-5">
              {/*begin::Heaeder navs toggle*/}
              <button
                className="d-lg-none btn btn-icon btn-color-white bg-hover-white bg-hover-opacity-10 w-35px h-35px h-md-40px w-md-40px ms-n2 me-2"
                id="kt_header_navs_toggle"
              >
                {/*begin::Svg Icon | path: icons/duotune/abstract/abs015.svg*/}
                <span className="svg-icon svg-icon-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                      fill="black"
                    />
                    <path
                      opacity="0.3"
                      d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                      fill="black"
                    />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
              </button>
              {/*end::Heaeder navs toggle*/}
              {/*begin::Logo*/}
              <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                <Link to="/" className="">
                  <img
                    alt="Logo"
                    src={toAbsoluteUrl("/media/logos/methodIcon.png")}
                    className="h-30px"
                  />
                </Link>
              </div>
              {/*end::Logo*/}
              <div className="align-self-end" id="kt_brand_tabs">
                {/*begin::Header tabs*/}
                <div
                  className="header-tabs overflow-auto mx-4 ms-lg-10 mb-5 mb-lg-0"
                  id="kt_header_tabs"
                  data-kt-swapper="true"
                  data-kt-swapper-mode="prepend"
                  data-kt-swapper-parent="{default: '#kt_header_navs_wrapper', lg: '#kt_brand_tabs'}"
                >
                  <ul className="nav flex-nowrap">
                    {Menus.map((menu, index) => (
                      <li className="nav-item" key={menu.id}>
                        <a
                          className={`nav-link ${!index && "active"}`}
                          data-bs-toggle="tab"
                          href={`#${menu.id}-tab`}
                        >
                          {menu.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/*end::Header tabs*/}
              </div>
            </div>
            {/*end::Brand*/}
            {/*begin::Topbar*/}
            <div className="d-flex align-items-center flex-shrink-0">
              {/*begin::Quick links*/}
              <div className="d-flex align-items-center ms-1">
                {/*begin::Menu wrapper*/}
                <div
                  className="btn btn-icon btn-color-white bg-hover-white bg-hover-opacity-10 w-35px h-35px h-md-40px w-md-40px"
                  data-kt-menu-trigger="click"
                  data-kt-menu-attach="parent"
                  data-kt-menu-placement="bottom-end"
                >
                  {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                  <span className="svg-icon svg-icon-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        x={2}
                        y={2}
                        width={9}
                        height={9}
                        rx={2}
                        fill="black"
                      />
                      <rect
                        opacity="0.3"
                        x={13}
                        y={2}
                        width={9}
                        height={9}
                        rx={2}
                        fill="black"
                      />
                      <rect
                        opacity="0.3"
                        x={13}
                        y={13}
                        width={9}
                        height={9}
                        rx={2}
                        fill="black"
                      />
                      <rect
                        opacity="0.3"
                        x={2}
                        y={13}
                        width={9}
                        height={9}
                        rx={2}
                        fill="black"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
                {/*begin::Menu*/}
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column w-250px w-lg-325px"
                  data-kt-menu="true"
                >
                  {/*begin::Heading*/}
                  <div
                    className="d-flex flex-column flex-center bgi-no-repeat rounded-top px-9 py-10"
                    style={{
                      backgroundImage: 'url("assets/media/misc/pattern-1.jpg")',
                    }}
                  >
                    {/*begin::Title*/}
                    <h3 className="text-white fw-bold mb-3">Quick Links</h3>
                    {/*end::Title*/}
                    {/*begin::Status*/}
                    <span className="badge bg-primary py-2 px-3">
                      25 pending tasks
                    </span>
                    {/*end::Status*/}
                  </div>
                  {/*end::Heading*/}
                  {/*begin:Nav*/}
                  <div className="row g-0">
                    {/*begin:Item*/}
                    <div className="col-6">
                      <a
                        href="../../demo20/dist/apps/projects/budget.html"
                        className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end border-bottom"
                      >
                        {/*begin::Svg Icon | path: icons/duotune/finance/fin009.svg*/}
                        <span className="svg-icon svg-icon-3x svg-icon-primary mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.3"
                              d="M15.8 11.4H6C5.4 11.4 5 11 5 10.4C5 9.80002 5.4 9.40002 6 9.40002H15.8C16.4 9.40002 16.8 9.80002 16.8 10.4C16.8 11 16.3 11.4 15.8 11.4ZM15.7 13.7999C15.7 13.1999 15.3 12.7999 14.7 12.7999H6C5.4 12.7999 5 13.1999 5 13.7999C5 14.3999 5.4 14.7999 6 14.7999H14.8C15.3 14.7999 15.7 14.2999 15.7 13.7999Z"
                              fill="black"
                            />
                            <path
                              d="M18.8 15.5C18.9 15.7 19 15.9 19.1 16.1C19.2 16.7 18.7 17.2 18.4 17.6C17.9 18.1 17.3 18.4999 16.6 18.7999C15.9 19.0999 15 19.2999 14.1 19.2999C13.4 19.2999 12.7 19.2 12.1 19.1C11.5 19 11 18.7 10.5 18.5C10 18.2 9.60001 17.7999 9.20001 17.2999C8.80001 16.8999 8.49999 16.3999 8.29999 15.7999C8.09999 15.1999 7.80001 14.7 7.70001 14.1C7.60001 13.5 7.5 12.8 7.5 12.2C7.5 11.1 7.7 10.1 8 9.19995C8.3 8.29995 8.79999 7.60002 9.39999 6.90002C9.99999 6.30002 10.7 5.8 11.5 5.5C12.3 5.2 13.2 5 14.1 5C15.2 5 16.2 5.19995 17.1 5.69995C17.8 6.09995 18.7 6.6 18.8 7.5C18.8 7.9 18.6 8.29998 18.3 8.59998C18.2 8.69998 18.1 8.69993 18 8.79993C17.7 8.89993 17.4 8.79995 17.2 8.69995C16.7 8.49995 16.5 7.99995 16 7.69995C15.5 7.39995 14.9 7.19995 14.2 7.19995C13.1 7.19995 12.1 7.6 11.5 8.5C10.9 9.4 10.5 10.6 10.5 12.2C10.5 13.3 10.7 14.2 11 14.9C11.3 15.6 11.7 16.1 12.3 16.5C12.9 16.9 13.5 17 14.2 17C15 17 15.7 16.8 16.2 16.4C16.8 16 17.2 15.2 17.9 15.1C18 15 18.5 15.2 18.8 15.5Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <span className="fs-5 fw-bold text-gray-800 mb-0">
                          Accounting
                        </span>
                        <span className="fs-7 text-gray-400">eCommerce</span>
                      </a>
                    </div>
                    {/*end:Item*/}
                    {/*begin:Item*/}
                    <div className="col-6">
                      <a
                        href="../../demo20/dist/apps/projects/settings.html"
                        className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom"
                      >
                        {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
                        <span className="svg-icon svg-icon-3x svg-icon-primary mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z"
                              fill="black"
                            />
                            <path
                              opacity="0.3"
                              d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <span className="fs-5 fw-bold text-gray-800 mb-0">
                          Administration
                        </span>
                        <span className="fs-7 text-gray-400">Console</span>
                      </a>
                    </div>
                    {/*end:Item*/}
                    {/*begin:Item*/}
                    <div className="col-6">
                      <a
                        href="../../demo20/dist/apps/projects/list.html"
                        className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end"
                      >
                        {/*begin::Svg Icon | path: icons/duotune/abstract/abs042.svg*/}
                        <span className="svg-icon svg-icon-3x svg-icon-primary mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M18 21.6C16.6 20.4 9.1 20.3 6.3 21.2C5.7 21.4 5.1 21.2 4.7 20.8L2 18C4.2 15.8 10.8 15.1 15.8 15.8C16.2 18.3 17 20.5 18 21.6ZM18.8 2.8C18.4 2.4 17.8 2.20001 17.2 2.40001C14.4 3.30001 6.9 3.2 5.5 2C6.8 3.3 7.4 5.5 7.7 7.7C9 7.9 10.3 8 11.7 8C15.8 8 19.8 7.2 21.5 5.5L18.8 2.8Z"
                              fill="black"
                            />
                            <path
                              opacity="0.3"
                              d="M21.2 17.3C21.4 17.9 21.2 18.5 20.8 18.9L18 21.6C15.8 19.4 15.1 12.8 15.8 7.8C18.3 7.4 20.4 6.70001 21.5 5.60001C20.4 7.00001 20.2 14.5 21.2 17.3ZM8 11.7C8 9 7.7 4.2 5.5 2L2.8 4.8C2.4 5.2 2.2 5.80001 2.4 6.40001C2.7 7.40001 3.00001 9.2 3.10001 11.7C3.10001 15.5 2.40001 17.6 2.10001 18C3.20001 16.9 5.3 16.2 7.8 15.8C8 14.2 8 12.7 8 11.7Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <span className="fs-5 fw-bold text-gray-800 mb-0">
                          Projects
                        </span>
                        <span className="fs-7 text-gray-400">
                          Pending Tasks
                        </span>
                      </a>
                    </div>
                    {/*end:Item*/}
                    {/*begin:Item*/}
                    <div className="col-6">
                      <a
                        href="../../demo20/dist/apps/projects/users.html"
                        className="d-flex flex-column flex-center h-100 p-6 bg-hover-light"
                      >
                        {/*begin::Svg Icon | path: icons/duotune/finance/fin006.svg*/}
                        <span className="svg-icon svg-icon-3x svg-icon-primary mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.3"
                              d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                              fill="black"
                            />
                            <path
                              d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <span className="fs-5 fw-bold text-gray-800 mb-0">
                          Customers
                        </span>
                        <span className="fs-7 text-gray-400">Latest cases</span>
                      </a>
                    </div>
                    {/*end:Item*/}
                  </div>
                  {/*end:Nav*/}
                  {/*begin::View more*/}
                  <div className="py-2 text-center border-top">
                    <a
                      href="../../demo20/dist/pages/user-profile/activity.html"
                      className="btn btn-color-gray-600 btn-active-color-primary"
                    >
                      View All
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                      <span className="svg-icon svg-icon-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <rect
                            opacity="0.5"
                            x={18}
                            y={13}
                            width={13}
                            height={2}
                            rx={1}
                            transform="rotate(-180 18 13)"
                            fill="black"
                          />
                          <path
                            d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </a>
                  </div>
                  {/*end::View more*/}
                </div>
                {/*end::Menu*/}
                {/*end::Menu wrapper*/}
              </div>
              {/*begin::User*/}
              <div
                className="d-flex align-items-center ms-1"
                id="kt_header_user_menu_toggle"
              >
                {/*begin::User info*/}
                <div
                  className="btn btn-flex align-items-center bg-hover-white bg-hover-opacity-10 py-2 px-2 px-md-3"
                  data-kt-menu-trigger="click"
                  data-kt-menu-attach="parent"
                  data-kt-menu-placement="bottom-end"
                >
                  {/*begin::Name*/}
                  <div className="d-none d-md-flex flex-column align-items-end justify-content-center me-2 me-md-4">
                    <span className="text-white opacity-75 fs-8 fw-bold lh-1 mb-1">
                      Max
                    </span>
                    <span className="text-white fs-8 fw-bolder lh-1">
                      UX Designer
                    </span>
                  </div>
                  {/*end::Name*/}
                  {/*begin::Symbol*/}
                  <div className="symbol symbol-30px symbol-md-40px">
                    <img
                      alt="Logo"
                      src={toAbsoluteUrl("/media/avatars/150-26.jpg")}
                    />
                  </div>
                  {/*end::Symbol*/}
                </div>
                {/*end::User info*/}
                {/*begin::User account menu*/}
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
                  data-kt-menu="true"
                >
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <div className="menu-content d-flex align-items-center px-3">
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-50px me-5">
                        <img alt="Logo" src="assets/media/avatars/300-1.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Username*/}
                      <div className="d-flex flex-column">
                        <div className="fw-bolder d-flex align-items-center fs-5">
                          Max Smith
                          <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">
                            Pro
                          </span>
                        </div>
                        <a
                          href="#"
                          className="fw-bold text-muted text-hover-primary fs-7"
                        >
                          max@kt.com
                        </a>
                      </div>
                      {/*end::Username*/}
                    </div>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator my-2" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <a
                      href="../../demo20/dist/account/overview.html"
                      className="menu-link px-5"
                    >
                      My Profile
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <a
                      href="../../demo20/dist/apps/projects/list.html"
                      className="menu-link px-5"
                    >
                      <span className="menu-text">My Projects</span>
                      <span className="menu-badge">
                        <span className="badge badge-light-danger badge-circle fw-bolder fs-7">
                          3
                        </span>
                      </span>
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div
                    className="menu-item px-5"
                    data-kt-menu-trigger="hover"
                    data-kt-menu-placement="left-start"
                  >
                    <a href="#" className="menu-link px-5">
                      <span className="menu-title">My Subscription</span>
                      <span className="menu-arrow" />
                    </a>
                    {/*begin::Menu sub*/}
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a
                          href="../../demo20/dist/account/referrals.html"
                          className="menu-link px-5"
                        >
                          Referrals
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a
                          href="../../demo20/dist/account/billing.html"
                          className="menu-link px-5"
                        >
                          Billing
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a
                          href="../../demo20/dist/account/statements.html"
                          className="menu-link px-5"
                        >
                          Payments
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a
                          href="../../demo20/dist/account/statements.html"
                          className="menu-link d-flex flex-stack px-5"
                        >
                          Statements
                          <i
                            className="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="View your statements"
                          />
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator my-2" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content px-3">
                          <label className="form-check form-switch form-check-custom form-check-solid">
                            <input
                              className="form-check-input w-30px h-20px"
                              type="checkbox"
                              defaultValue={1}
                              name="notifications"
                            />
                            <span className="form-check-label text-muted fs-7">
                              Notifications
                            </span>
                          </label>
                        </div>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu sub*/}
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <a
                      href="../../demo20/dist/account/statements.html"
                      className="menu-link px-5"
                    >
                      My Statements
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator my-2" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div
                    className="menu-item px-5"
                    data-kt-menu-trigger="hover"
                    data-kt-menu-placement="left-start"
                  >
                    <a href="#" className="menu-link px-5">
                      <span className="menu-title position-relative">
                        Language
                        <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                          English
                          <img
                            className="w-15px h-15px rounded-1 ms-2"
                            src="assets/media/flags/united-states.svg"
                            alt=""
                          />
                        </span>
                      </span>
                    </a>
                    {/*begin::Menu sub*/}
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a
                          href="../../demo20/dist/account/settings.html"
                          className="menu-link d-flex px-5 active"
                        >
                          <span className="symbol symbol-20px me-4">
                            <img
                              className="rounded-1"
                              src="assets/media/flags/united-states.svg"
                              alt=""
                            />
                          </span>
                          English
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a
                          href="../../demo20/dist/account/settings.html"
                          className="menu-link d-flex px-5"
                        >
                          <span className="symbol symbol-20px me-4">
                            <img
                              className="rounded-1"
                              src="assets/media/flags/spain.svg"
                              alt=""
                            />
                          </span>
                          Spanish
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a
                          href="../../demo20/dist/account/settings.html"
                          className="menu-link d-flex px-5"
                        >
                          <span className="symbol symbol-20px me-4">
                            <img
                              className="rounded-1"
                              src="assets/media/flags/germany.svg"
                              alt=""
                            />
                          </span>
                          German
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a
                          href="../../demo20/dist/account/settings.html"
                          className="menu-link d-flex px-5"
                        >
                          <span className="symbol symbol-20px me-4">
                            <img
                              className="rounded-1"
                              src="assets/media/flags/japan.svg"
                              alt=""
                            />
                          </span>
                          Japanese
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a
                          href="../../demo20/dist/account/settings.html"
                          className="menu-link d-flex px-5"
                        >
                          <span className="symbol symbol-20px me-4">
                            <img
                              className="rounded-1"
                              src="assets/media/flags/france.svg"
                              alt=""
                            />
                          </span>
                          French
                        </a>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu sub*/}
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5 my-1">
                    <a
                      href="../../demo20/dist/account/settings.html"
                      className="menu-link px-5"
                    >
                      Account Settings
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <a
                      href="../../demo20/dist/authentication/flows/basic/sign-in.html"
                      className="menu-link px-5"
                    >
                      Sign Out
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator my-2" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <div className="menu-content px-5">
                      <label
                        className="form-check form-switch form-check-custom form-check-solid pulse pulse-success"
                        htmlFor="kt_user_menu_dark_mode_toggle"
                      >
                        <input
                          className="form-check-input w-30px h-20px"
                          type="checkbox"
                          defaultValue={1}
                          name="mode"
                          id="kt_user_menu_dark_mode_toggle"
                          data-kt-url="../../demo20/dist/index.html"
                        />
                        <span className="pulse-ring ms-n1" />
                        <span className="form-check-label text-gray-600 fs-7">
                          Dark Mode
                        </span>
                      </label>
                    </div>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::User account menu*/}
              </div>
              {/*end::User */}
              {/*begin::Heaeder menu toggle*/}
              {/*end::Heaeder menu toggle*/}
            </div>
            {/*end::Topbar*/}
          </div>
          {/*end::Wrapper*/}
        </div>
        {/*end::Container*/}
      </div>
      {/*end::Header top*/}
      {/*begin::Header navs*/}
      <Header />
      {/*end::Header navs*/}
    </div>
  );
}
