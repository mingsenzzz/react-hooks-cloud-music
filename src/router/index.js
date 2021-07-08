import { Redirect } from "react-router-dom";
import Discovery from "@/pages/discovery";
import Mine from "@/pages/mine";
import Friends from "@/pages/friends";
import Recommend from "../pages/discovery/child-pages/recommend";
import Ranking from "../pages/discovery/child-pages/ranking";
import Songs from "../pages/discovery/child-pages/songs";
import DjRadio from "../pages/discovery/child-pages/djradio";
import Artist from "../pages/discovery/child-pages/artist";
import Album from "../pages/discovery/child-pages/album";

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
    routes: [
      {
        path: "/discovery",
        exact: true,
        component: () => {
          return <Redirect to="/discovery/recommend" />;
        },
      },
      {
        path: "/discovery/recommend",
        component: Recommend,
      },
      {
        path: "/discovery/ranking",
        component: Ranking,
      },
      {
        path: "/discovery/songs",
        component: Songs,
      },
      {
        path: "/discovery/djradio",
        component: DjRadio,
      },
      {
        path: "/discovery/artist",
        component: Artist,
      },
      {
        path: "/discovery/album",
        component: Album,
      },
    ],
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
