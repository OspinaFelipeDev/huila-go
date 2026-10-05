import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import type { ComponentType, ReactElement } from "react";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";
import { propertyDetailLoader } from "../loaders/propertyDetailLoader";
import { MainLayout } from "../layouts/MainLayout";
import { BookingLayout } from "../layouts/BookingLayout";

const HomePage = lazy(() => import("../pages/HomePage"));
const SearchPage = lazy(() => import("../pages/SearchPage"));
const DestinationsPage = lazy(() => import("../pages/DestinationsPage"));
const DestinationDetailPage = lazy(
  () => import("../pages/DestinationDetailPage")
);
const FavoritesPage = lazy(() => import("../pages/FavoritesPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const BookingPage = lazy(() => import("../pages/BookingPage"));
const PropertyDetailPage = lazy(() => import("../pages/PropertyDetailPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const RouteErrorPage = lazy(() => import("../pages/RouteErrorPage"));

function withSuspense(Component: ComponentType): ReactElement {
  return (
    <Suspense fallback={<p className="main-content">Cargando página...</p>}>
      <Component />
    </Suspense>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: withSuspense(RouteErrorPage),
    children: [
      { index: true, element: withSuspense(HomePage) },
      { path: "search", element: withSuspense(SearchPage) },

      { path: "destinations", element: withSuspense(DestinationsPage) },

      {
        path: "destinations/:id",
        element: withSuspense(DestinationDetailPage),
      },

      {
        path: "favorites",
        element: <ProtectedRoute>{withSuspense(FavoritesPage)}</ProtectedRoute>,
      },
      {
        path: "profile",
        element: <ProtectedRoute>{withSuspense(ProfilePage)}</ProtectedRoute>,
      },
      { path: "login", element: withSuspense(LoginPage) },
      { path: "register", element: withSuspense(RegisterPage) },
      {
        path: "properties/:id",
        element: withSuspense(PropertyDetailPage),
        loader: propertyDetailLoader,
        errorElement: withSuspense(RouteErrorPage),
      },
      {
        path: "booking",
        element: <BookingLayout />,
        children: [
          {
            path: ":id",
            element: (
              <ProtectedRoute>{withSuspense(BookingPage)}</ProtectedRoute>
            ),
          },
        ],
      },
      { path: "*", element: withSuspense(NotFoundPage) },
    ],
  },
]);