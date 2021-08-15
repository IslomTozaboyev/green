import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPhotos } from "../../Redux/actions/usersActions";
import themeContext from "../../themeContext";
import PhotosWrappper from "./PhotosWrapper";

const Photos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setPhotos(dispatch);
  }, []);

  const data = useSelector((state) => state.photos.data);

  const { colors } = useContext(themeContext);

  return (
    <PhotosWrappper colors={colors}>
      {(data.length > 0 && (
        <div className="photos__bg p-2 m-0">
          <div className="row">
            <h1>Photos</h1>
            {data.map((v) => (
              <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <div className="box mb-4">
                  <p className="title">{v.title}</p>
                  <img className="photo me-5" src={v.url} alt="rasm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )) ||
        ""}
    </PhotosWrappper>
  );
};

export default Photos;
