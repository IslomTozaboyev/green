import { faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinearProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAlbums } from "../../Redux/actions";
import AlbumsWrapper from "./AlbumsWrapper";

const Albums = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setAlbums(dispatch);
  }, []);

  const data = useSelector((state) => state.albums);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);
  console.log(data);

  return (
    <AlbumsWrapper>
      {(loading && <LinearProgress />) || ""}
      {(data.length > 0 && (
        <div className="row">
          <h1 className="title">Albums</h1>
          {data.map((v) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="box mb-4 d-flex justify-content-center align-items-center text-center">
                <div>
                  <div className="bg_icon mb-3">
                    <FontAwesomeIcon icon={faApple} />
                  </div>
                  <h4 className="mt-5 subtitle">{v.id}</h4>
                  <h5 className="title">{v.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      )) ||
        ""}
    </AlbumsWrapper>
  );
};

export default Albums;
