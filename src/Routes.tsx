import React from "react";
import { Route, Routes } from "react-router-dom";

import AppHeader from "./components/AppHeader";
import Dashboard from "./pages/Dashboard";
import FoodReport from "./pages/FoodReport";
import Favorites from "./pages/Favorites";
import { DASHBOARD, FAVORITES, FOOD_REPORT } from "./constants/paths";

const CapeRoutes: React.FC = () => (
  <>
    <AppHeader />
    <Routes>
      <Route path={DASHBOARD} element={<Dashboard />} />
      <Route path={FAVORITES} element={<Favorites />} />
      <Route path={FOOD_REPORT} element={<FoodReport />} />
    </Routes>
  </>
);

export default CapeRoutes;
