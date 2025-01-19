import { Suspense } from "react";
import { routes } from "../model/routes";
import { Route, Routes } from "react-router";
import PrivateRoute from "./private-route";
import PublicRoute from "./public-route";
import { Loader } from "@/shared/ui/loader";
import { useAuth } from "@/app/providers/auth";

export const AppRouter = () => {
  const { user, loading } = useAuth();
  const isAuthenticated = !!user;

  if (loading) {
    return (
      <div className="h-[calc(100vh-var(--header))] flex items-center justify-center">
        <Loader />
      </div>
    );
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
