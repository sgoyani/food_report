import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
} from "@progress/kendo-react-layout";

import { DASHBOARD, FAVORITES } from "../../constants/paths";

import "./appHeader.css";

const AppHeader = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <AppBar>
        <AppBarSpacer style={{ width: 4 }} />

        <AppBarSection>
          <h1 className="title">Food Data Central</h1>
        </AppBarSection>

        <AppBarSpacer style={{ width: 32 }} />

        <AppBarSection>
          <ul>
            <li>
              <span role="link" onClick={() => navigate(DASHBOARD)}>
                Home
              </span>
            </li>
            <li>
              <span role="link" onClick={() => navigate(FAVORITES)}>
                Favorites
              </span>
            </li>
          </ul>
        </AppBarSection>
      </AppBar>
    </React.Fragment>
  );
};

export default AppHeader;
