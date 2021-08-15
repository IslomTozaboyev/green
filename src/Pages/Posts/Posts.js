import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostsWrapper from "./PostsWrapper";
import { setPosts } from "../../Redux/actions/usersActions";
import Button from "@material-ui/core/Button";

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setPosts(dispatch);
  }, []);

  const data = useSelector((state) => state.posts.data);
  console.log(data);

  return (
    <PostsWrapper>
      {(data.length > 0 && (
        <div>
          <h1 className="title m-3">Posts</h1>
          <div className="small__container justify-content-center align-items-center m-0 ">
            {data.map((value, index) => {
              return (
                <div>
                  <div className="cards">
                    <div className="box">
                      <div className="content">
                        <h2>{value.id}</h2>
                        <p>{value.title}</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <Button className="button">
                          <a href="#">Read More</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )) ||
        ""}
    </PostsWrapper>
  );
};

export default Posts;
