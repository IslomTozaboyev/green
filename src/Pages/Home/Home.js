import React from "react";
import HomeWrapper from "./HomeWrapper";
import Button from "@material-ui/core/Button";
import photo from "./../../img/photo.png";
import photo2 from "./../../img/green.png";

const Home = () => {
  return (
    <HomeWrapper>
      <div>
        <h1 className="title my-3">Home</h1>
        <div className="box">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-12 col-md-6 col-lg-6">
              <h3 className="fw-bold">Welcome back, Tozaboyev Islom!</h3>
              <p className="fs-5">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything
              </p>
              <Button className="btnn" variant="contained" color="primary">
                Go Now
              </Button>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <img className="photo" src={photo} alt="rasm" />
            </div>
          </div>
        </div>
        <div className="row my-5">
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
