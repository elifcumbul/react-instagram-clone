import { Fragment } from "react";
import { Navigate } from "react-router-dom";

function PrivatePage({ children }: any) {
  const accessToken = window.localStorage.getItem("Access Token");

  return accessToken ? (
    <Fragment>{children}</Fragment>
  ) : (
    <Navigate to="/login"></Navigate>
  );
}

export default PrivatePage;
