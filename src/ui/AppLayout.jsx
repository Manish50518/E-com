import { Outlet, useLoaderData } from "react-router";
import Header from "./Header";
import { useSelector } from "react-redux";

function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
