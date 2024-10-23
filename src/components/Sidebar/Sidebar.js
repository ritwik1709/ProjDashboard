
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Nav } from "reactstrap";
import PerfectScrollbar from "perfect-scrollbar";


var ps;

function Sidebar(props) {
  const location = useLocation();
  const sidebar = React.useRef();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  return (
    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
         <div className="logo ml-2 ">
        {/* Avatar */}
        <img
          src="data:image/jpeg;base64,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"
          alt="Avatar"
          className="rounded-circle img-fluid  ml-4" // Fully rounded avatar
          style={{ width: "100px", height: "100px" }}
        />
     
        <p className="mt-4">Welcome, User</p>
      </div>

      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {props.routes.map((prop, key) => {
            return (
              <li
                className={
                  activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                }
                key={key}
              >
                <NavLink to={prop.layout + prop.path} className="nav-NavLink">
                  <i className={prop.icon} />
                  <p>{prop.name}</p>
                </NavLink>
              </li>
            );
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
