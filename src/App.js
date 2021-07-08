import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import { memo } from "react";
import { renderRoutes } from "react-router-config";
import routes from "@/router";
function App() {
  return (
    <div>
      <AppHeader />
      {renderRoutes(routes)}
      content
      <AppFooter />
    </div>
  );
}

export default memo(App);
