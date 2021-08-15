import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "../../Containers/Container/Container";
import colors from "../../data/colors";
import themeContext from "../../themeContext";
import Albums from "../Albums/Albums";
import Home from "../Home";
import Photos from "../Photos/Photos";
import Posts from "../Posts";
import Todos from "../Todos";
import Users from "../Users";
import DashboardsWrapper from "./DashboardsWrapper";

const data = [
  { title: "home", page: <Home /> },
  { title: "users", page: <Users /> },
  { title: "todos", page: <Todos /> },
  { title: "albums", page: <Albums /> },
  { title: "photos", page: <Photos /> },
  { title: "posts", page: <Posts /> },
];

const Dashboards = () => {
  const { page } = useParams();
  const { colors } = useContext(themeContext);

  return (
    <Container>
      <DashboardsWrapper colors={colors}>
        {data.map((v, i) => {
          return <>{page === `${v.title}` && v.page}</>;
        })}
      </DashboardsWrapper>
    </Container>
  );
};

export default Dashboards;
