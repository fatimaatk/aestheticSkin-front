import axios from "axios";
import { useEffect } from "react";
import Cookies from "js-cookie";
import NavDashboard from "./Dashboard/NavDashboard";
import DashboardHome from "./Dashboard/DashboardHome";

const DashboardAdmin = () => {
  return (
    <div className="min-h-full">
      <header className="bg-white shadow">
        <NavDashboard />
      </header>
      <main>
        <DashboardHome />
      </main>
    </div>
  );
};

export default DashboardAdmin;
