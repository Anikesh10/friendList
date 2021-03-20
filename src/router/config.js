import { lazy } from "react";

const routerConfig = [
  {
    path: "/",
    exact: true,
    component: lazy(() => import("./../pages/Home")),
  },
];

export default routerConfig;
