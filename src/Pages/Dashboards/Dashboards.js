import { LinearProgress } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../../Containers/Container/Container";
import Albums from "../Albums/Albums";
import Home from "../Home";
import Photos from "../Photos/Photos";
import Posts from "../Posts";
import Todos from "../Todos";
import Users from "../Users";
import DashboardsWrapper from "./DashboardsWrapper";

// const data = [
//   { title: "home", page: <Home /> },
//   { title: "users", page: <Users /> },
//   { title: "todos", page: <Todos /> },
// ];

const Dashboards = () => {
  const { page } = useParams();

  const loading = useSelector((state) => state.loading);

  return (
    <Container>
      <DashboardsWrapper>
        <>
          {page === "home" && <Home />}
          {page === "users" && <Users />}
          {page === "todos" && <Todos />}
          {page === "albums" && <Albums />}
          {page === "photos" && <Photos />}
          {page === "posts" && <Posts />}
        </>
      </DashboardsWrapper>
    </Container>
  );
};

export default Dashboards;
