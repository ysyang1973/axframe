import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUserStore } from "stores";
import { ROUTES } from "./Routes";
import { getAppData } from "../@core/utils/store";

interface Props {
  children: JSX.Element;
}

function RestrictAuth({ children }: Props) {
  const location = useLocation();

  if (getAppData()?.authorization) {
    return <Navigate to={ROUTES.HOME.path} state={{ from: location }} replace />;
  }

  return children;
}

export default RestrictAuth;
