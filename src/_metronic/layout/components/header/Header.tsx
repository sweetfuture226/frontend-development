import { iteratorSymbol } from "immer/dist/internal";
import { title } from "process";
import React, { FC } from "react";
import Menus from "../../core/Menus";
import { MenuInner } from "./MenuInner";
import { MenuItem } from "./MenuItem";

const Header: FC = () => {
  return (
    <div
      className="header-navs d-flex align-items-stretch flex-stack h-lg-100px w-100 py-5 py-lg-0"
      id="kt_header_navs"
      data-kt-drawer="true"
      data-kt-drawer-name="header-menu"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="{default:'200px', '300px': '250px'}"
      data-kt-drawer-direction="start"
      data-kt-drawer-toggle="#kt_header_navs_toggle"
      data-kt-swapper="true"
      data-kt-swapper-mode="append"
      data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header'}"
    >
      <div className="d-lg-flex container w-100">
        <div
          className="d-lg-flex flex-column justify-content-lg-center w-100"
          id="kt_header_navs_wrapper"
        >
          <div className="tab-content">
            {Menus.map((menu, index) => (
              <div
                className={`tab-pane fade h-100 ${!index && "active show"}`}
                id={`${menu.id}-tab`}
              >
                <div
                  className="menu menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch h-100"
                  id="#kt_header_menu"
                  data-kt-menu="true"
                >
                  {menu.children ? (
                    menu.children.map((item: any) => (
                      <MenuItem title={item.title} to={item.link} />
                    ))
                  ) : (
                    <p />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
