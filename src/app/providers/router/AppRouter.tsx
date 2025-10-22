import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "./router";

export const AppRouter: React.FC = () => {
  const routing = useRoutes(routes);
  return <>{routing}</>;
};

export const AppRouterProvider: React.FC = () => (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
