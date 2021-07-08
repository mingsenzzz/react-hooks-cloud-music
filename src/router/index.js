import { Redirect } from "react-router-dom";
import Discovery from "@/pages/discovery";
import Mine from "@/pages/mine";
import Friends from "@/pages/friends";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => {
      return <Redirect to="/discovery" />;
    },
  },
  {
    path: "/discovery",
    component: Discovery,
  },
  {
    path: "/mine",
    component: Mine,
  },
  {
    path: "/friends",
    component: Friends,
  },
];

export default routes;
