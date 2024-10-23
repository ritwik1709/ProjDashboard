
import Dashboard from "views/Dashboard.js";
import Leads from "views/Leads.js";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/admin",
  },
 
  {
    path: "/leads",
    name: "Leads",
    icon: "nc-icon nc-badge",
    component: <Leads />,
    layout: "/admin",
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: "nc-icon nc-sound-wave",
    layout: "/admin",
  },
  {
    path: "/reports",
    name: "Reports",
    icon: "nc-icon nc-paper",
    layout: "/admin",
  },

];
export default routes;
