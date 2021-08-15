import { LinearProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAlbums } from "../../Redux/actions/usersActions";
import AlbumsWrapper from "./AlbumsWrapper";
import Button from "@material-ui/core/Button";
import { useContext } from "react";
import themeContext from "../../themeContext";

const Albums = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setAlbums(dispatch);
  }, []);

  const data = useSelector((state) => state.albums.data);
  const loading = useSelector((state) => state.loading);
  console.log(data);

  const { colors } = useContext(themeContext);

  return (
    <AlbumsWrapper colors={colors}>
      {(loading && <LinearProgress />) || ""}
      {(data.length > 0 && (
        <div>
          <h2 className="title m-3">Albums</h2>
          <div className="bigCard">
            {data.map((v) => (
              <div className="">
                <div className="cards">
                  <div className="circle">
                    <h1>{v.id}</h1>
                  </div>
                  <div className="content">
                    <p className="fw-bold fs-5 text-center">{v.title}</p>
                    <Button className="button">
                      <a className="text-light" href="#">
                        Read More
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )) ||
        ""}
    </AlbumsWrapper>
  );
};

export default Albums;
