import React from "react";
import HomeWrapper from "./HomeWrapper";
import Button from "@material-ui/core/Button";
import photo from "./../../img/photo.png";
import photo2 from "./../../img/green.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faComment,
  faMailBulk,
  faPhotoVideo,
  faPooStorm,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import themeContext from "../../themeContext";

const datas = [
  {
    id: "01",
    subtitle: "Users",
    img: photo2,
    desc: "Read More",
    icon: faUser,
    to: "/dashboard/users",
  },
  {
    id: "02",
    subtitle: "Todos",
    img: photo2,
    desc: "Read More",
    icon: faComment,
    to: "/dashboard/todos",
  },
  {
    id: "03",
    subtitle: "Albums",
    img: photo2,
    desc: "Read More",
    icon: faMailBulk,
    to: "/dashboard/albums",
  },
  {
    id: "04",
    subtitle: "Photos",
    img: photo2,
    desc: "Read More",
    icon: faPhotoVideo,
    to: "/dashboard/photos",
  },
  {
    id: "05",
    subtitle: "Posts",
    img: photo2,
    desc: "Read More",
    icon: faPooStorm,
    to: "/dashboard/posts",
  },
];

const Home = () => {
  const { colors } = useContext(themeContext);
  return (
    <HomeWrapper colors={colors}>
      <div>
        <h2 className="my-3 ms-3">Home</h2>
        <div className="small__container justify-content-center align-items-center">
          {datas.map((v, i) => {
            return (
              <div className="cards">
                <div className="icon">{v.id}</div>
                <div className="content">
                  <h3 className="text">
                    <FontAwesomeIcon
                      className="me-2"
                      icon={v.icon}
                    ></FontAwesomeIcon>
                    {v.subtitle}
                  </h3>
                  <Link to={v.to}>
                    <Button className="button ">
                      <a className="text-dark" href="#">
                        {v.desc}
                      </a>
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="box">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-12 col-md-6 col-lg-6">
              <h3 className="fw-bold">Welcome back, Tozaboyev Islom!</h3>
              <p className="fs-5">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything
              </p>
              <div className="btn">
                <a className="fw-bold text" href="#">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <img className="photo" src={photo} alt="rasm" />
            </div>
          </div>
        </div>
        <div className="row m-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <p className="fs-4 fw-bold">Current Download</p>
            <img
              className="w-75 mt-3"
              src="https://upload.wikimedia.org/wikipedia/ru/1/13/%D0%A1%D1%82%D0%B0%D1%82%D0%B8%D1%81%D1%82%D0%B8%D0%BA%D0%B0_%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%BE%D0%B2_%D0%B7%D0%B0_%D0%B4%D0%B5%D0%BA%D0%B0%D0%B1%D1%80%D1%8C_2008_%28%D0%BC%D0%B8%D1%80%29.png"
              alt="rasm"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="d-flex justify-content-between align-items-center p-2">
              <div>
                <p className="fw-bold fs-5">Area Installed</p>
                <p className="fw-bold fs-5">(+43%) than last year</p>
              </div>
              <div>
                <p className="fw-bold fs-6 me-3">2019</p>
              </div>
            </div>
            <img className="w-75" src={photo2} alt="rasm" />
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
