import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../Redux/actions";
import PostsWrapper from "./PostsWrapper";
import photo from "./../../img/photo.png";

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setPosts(dispatch);
  }, []);

  const data = useSelector((state) => state.posts);
  console.log(data);

  return (
    <PostsWrapper>
      {(data.length > 0 && (
        <div className="row">
          <h1 className="title mb-3">Posts</h1>
          {data.map((value, index) => {
            return (
              <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <div className="box mb-4 ">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h4>
                        <span className="fs-6">id: </span> {value.id}
                      </h4>
                      <p>{value.title}</p>
                    </div>
                    <img className="green__logo" src={photo} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )) ||
        ""}
    </PostsWrapper>
  );
};

export default Posts;
