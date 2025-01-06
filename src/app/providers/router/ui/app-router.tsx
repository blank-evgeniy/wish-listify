import { Suspense } from "react";
import { routes } from "../model/routes";
import { Route, Routes } from "react-router";
import { useUser } from "../../user";
import PrivateRoute from "./private-route";
import PublicRoute from "./public-route";

export const AppRouter = () => {
  const isAuthenticated = !!useUser();

  const renderRoutes = routes.map((route) => {
    const { path, element, authOnly, publicOnly } = route;

    // Определяем элемент для маршрута в зависимости от его типа
    const routeElement = authOnly ? (
      <PrivateRoute isAuthenticated={isAuthenticated}>{element}</PrivateRoute>
    ) : publicOnly ? (
      <PublicRoute isAuthenticated={isAuthenticated}>{element}</PublicRoute>
    ) : (
      element
    );

    return <Route key={path} path={path} element={routeElement} />;
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>{renderRoutes}</Routes>
    </Suspense>
  );
};
