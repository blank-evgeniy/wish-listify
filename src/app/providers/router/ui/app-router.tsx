import { Suspense } from "react";
import { routes } from "../model/routes";
import { Route, Routes } from "react-router";

export const AppRouter = () => {
  const renderRoutes = routes.map((route) => {
    return <Route key={route.path} path={route.path} element={route.element} />;
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>{renderRoutes}</Routes>
    </Suspense>
  );
};
