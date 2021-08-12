import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../../Redux/actions";
import TodosWrapper from "./TodosWrapper";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const Todos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTodos(dispatch);
  }, []);

  const data = useSelector((state) => state.todos);

  return (
    <TodosWrapper>
      {(data.length > 0 && (
        <div>
          <h1 className="text">Todos</h1>
          <div className="row">
            {data.map((v) => (
              <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <div className="box mb-3 ">
                  <div className="d-flex justify-content-between align-items-center">
                    <Button
                      className="id mb-4"
                      variant="contained"
                      color="primary"
                    >
                      id: {v.id}
                    </Button>
                    <Button
                      className="id mb-4"
                      variant="contained"
                      color="primary"
                    >
                      userId: {v.userId}
                    </Button>
                  </div>
                  <h5 className="title">Title: {v.title}</h5>
                  <div className="mb-5">
                    <FontAwesomeIcon className="text-success" icon={faStar} />
                    <FontAwesomeIcon className="text-success" icon={faStar} />
                    <FontAwesomeIcon className="text-success" icon={faStar} />
                    <FontAwesomeIcon className="text-success" icon={faStar} />
                    <FontAwesomeIcon className="text-success" icon={faStar} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )) ||
        ""}
    </TodosWrapper>
  );
};

export default Todos;
