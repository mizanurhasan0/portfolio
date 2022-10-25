import React from "react";
import { useRoutes } from "react-router-dom";
import Ecommerce from "../../Components/Projects/Project/Ecommerce";
import Blogs from "../../Pages/Blog/Blogs";
import Chating from "../../Pages/Chating/Chating";
import WProtfolio from "../../Pages/Portfolio/WPortfolio";

export default function RoutingCon() {
  const routes = useRoutes([
    {
      path: "/",
      element: <WProtfolio />,
    },
    {
      path: "/chating",
      element: <Chating />,
    },
    {
      path: "/blog",
      element: <Blogs />,
    },
    {
      path: "/project",
      element: <Ecommerce />,
    },
  ]);
  return routes;
}
