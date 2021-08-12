import { faAudible } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faCommentDots,
  faHome,
  faPhotoVideo,
  faPooStorm,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import ContainerWrapper from "./ContainerWrapper";
import Button from "@material-ui/core/Button";

const data = [
  { to: "/dashboard/home", page: "home", icon: faHome, title: "Home" },
  { to: "/dashboard/users", page: "users", icon: faUser, title: "User" },
  {
    to: "/dashboard/todos",
    page: "todos",
    icon: faCommentDots,
    title: "Todos",
  },
  { to: "/dashboard/albums", page: "albums", icon: faAudible, title: "Albums" },
  {
    to: "/dashboard/photos",
    page: "photos",
    icon: faPhotoVideo,
    title: "Photos",
  },
  { to: "/dashboard/posts", page: "posts", icon: faPooStorm, title: "Posts" },
];

const Container = ({ children }) => {
  const { page } = useParams();
  return (
    <ContainerWrapper>
      <div className="sidebar">
        <div className="d-flex justify-content-between align-items-center my-1">
          <img
            className="w-25"
            src="https://minimals.cc/static/brand/logo_single.svg"
            alt="rasm"
          />
          <p className="fw-bold fs-3 mb-0 text-success">Menu</p>
        </div>
        <div className="d-flex my-4 p-3 secondary">
          <div className="bg-success w-25 rounded-circle d-flex justify-content-center align-items-center me-2">
            <span className="fw-bold fs-4 p-2 text-white">T</span>
          </div>
          <div>
            <p className="mb-0 fw-bold">Tozaboyev Islom</p>
            <p className="m-0 ">user</p>
          </div>
        </div>
        <ul className="menu p-0">
          <h5 className="mb-2 fw-bold ms-3">General</h5>
          {data.map((value, index) => {
            return (
              <li>
                <Link to={value.to}>
                  <Button
                    className={`w-100 btnn ${
                      (page == `${value.page}` && "active") || ""
                    }`}
                    variant="contained"
                  >
                    <FontAwesomeIcon className="me-2" icon={value.icon} />
                    {value.title}
                  </Button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="rightside">
        <header className="px-2 py-3 shadow">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Button className="p-2 me-3" variant="contained" color="success">
                <FontAwesomeIcon icon={faBars} />
              </Button>
              <img
                className="logo"
                src="https://minimals.cc/static/brand/logo_single.svg"
                alt="rasm"
              />
            </div>
            <div>
              <img
                src="https://minimals.cc/static/icons/ic_flag_en.svg"
                alt="rasm"
              />
              <FontAwesomeIcon className="me-4 ms-3 fs-5 mb-0" icon={faUser} />
            </div>
          </div>
        </header>
        <div className="content">{children}</div>
      </div>
    </ContainerWrapper>
  );
};

export default Container;
