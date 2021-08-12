import styled from "styled-components";

const TodosWrapper = styled.div`
  .box {
    background-color: #89d3a6;
    height: 200px;
    position: relative;
    padding: 20px;
    border-radius: 10px;
  }
  .title {
    position: absolute;
    bottom: 10px;
  }
  .id {
    background-color: #20c066;
    border-radius: 15px;

    &:hover {
      background-color: #20c069;
    }
  }

  .text {
    color: #00ab55;
  }
`;
export default TodosWrapper;
