import React, { lazy, Suspense } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Nav from "../components/Nav";
import Marquee from "../components/Marquee";
import useAppContext from "../hooks/useAppContext";

export const routes = [
  {
    pageName: "Home",
    href: "/",
    component: lazy(() => import("../pages/Home")),
  },
  {
    pageName: "Detail",
    href: "/detail",
    component: lazy(() => import("../pages/Detail")),
  },

  {
    pageName: "GameHash",
    href: "/gameHash",
    component: lazy(() => import("../pages/GameHash")),
  },
  {
    pageName: "HistoryDetail",
    href: "/history/detail/:room",
    component: lazy(() => import("../pages/HistoryDetail")),
  },
  {
    pageName: "GameInfo",
    href: "/room/:room",
    component: lazy(() => import("../pages/GameInfo")),
  },
];

const Router = () => {
  const { isWhiteMode } = useAppContext();

  return (
    <HashRouter>
      <Nav />
      <Marquee />
      <BackGroundContainer isWhiteMode={isWhiteMode}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {routes.map((route) => {
              return (
                <Route
                  path={route.href}
                  key={route.pageName}
                  component={route.component}
                  exact
                />
              );
            })}
          </Switch>
        </Suspense>
      </BackGroundContainer>
    </HashRouter>
  );
};

const BackGroundContainer = styled.div<{ isWhiteMode: boolean }>`
  background: ${({ isWhiteMode, theme }) =>
    isWhiteMode ? "#FFF" : theme.Dark_Bg};
  width: 100%;
  min-height: 100vh;
`;
export default Router;
