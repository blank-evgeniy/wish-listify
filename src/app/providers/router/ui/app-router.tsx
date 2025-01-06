import { Suspense } from "react";
import { routes } from "../model/routes";
import { Route, Routes } from "react-router";
import { useUser } from "../../user";
import PrivateRoute from "./private-route";
import PublicRoute from "./public-route";
import { Loader } from "@/shared/ui/loader";

export const AppRouter = () => {
  const { user, loading } = useUser();
  const isAuthenticated = !!user;

  if (loading) {
    return <Loader />;
  }

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
    <Suspense fallback={<Loader />}>
      <Routes>{renderRoutes}</Routes>
    </Suspense>
  );
};
