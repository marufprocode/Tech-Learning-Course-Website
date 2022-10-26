import React from "react";
import LeftSideDropdown from "./LeftSideDropdown";

const Drawer = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content h-[1200px]">
          {/* <!-- Sidebar content here --> */}
          <div>
            <LeftSideDropdown/>
            <LeftSideDropdown/>
            <LeftSideDropdown/>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
