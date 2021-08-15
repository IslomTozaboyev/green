import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import TodosWrapper from "./TodosWrapper";
import { setTodos } from "../../Redux/actions/usersActions";
import { LinearProgress } from "@material-ui/core";

const Todos = () => {
  useEffect(() => {
    setTodos();
  }, []);

  const data = useSelector((state) => state.todos.data);
  const loading = useSelector((state) => state.global.loading);

  return (
    <TodosWrapper>
      {" "}
      {(loading && <LinearProgress />) ||
        (data.length > 0 && (
          <div>
            <h1 className="m-3">Todos</h1>
            <div className="">
              <div className="small__container justify-content-center align-items-center">
                {data.map((v) => (
                  <div>
                    <div class="box">
                      <span></span>
                      <div class="content">
                        <h2>Card {v.id}</h2>
                        <p className="fw-bold fs-5">{v.title}</p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dolores, quas.
                        </p>
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )) ||
        ""}
    </TodosWrapper>
  );
};

export default Todos;
