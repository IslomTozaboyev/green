import styled from "styled-components";

const TodosWrapper = styled.div`
  .small__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .box {
      position: relative;
      width: 320px;
      height: 400px;
      color: #fff;
      background: #111;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin: 20px 30px;
      transition: 0.5s;
      &:hover {
        transform: translateY(-20px);
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(315deg, #4dff03, #00d0ff);
      }
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(315deg, #4dff03, #00d0ff);
        filter: blur(30px);
      }
      span {
        position: absolute;
        top: 6px;
        bottom: 6px;
        left: 6px;
        right: 6px;
        background: rgba(0, 0, 0, 0.6);
        z-index: 2;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          pointer-events: none;
        }
      }
      .content {
        position: relative;
        z-index: 10;
        padding: 20px 40px;
        h2 {
          font-size: 2em;
          color: #fff;
          margin-bottom: 10px;
        }
        p {
          font-size: 1.1em;
          color: #fff;
          margin-bottom: 10px;
          line-height: 1.4em;
        }
      }
      a {
        display: inline-block;
        font-size: 1.1em;
        color: #111;
        background: #f2f2f2;
        padding: 10px;
        text-decoration: none;
        font-weight: 700;
        border-radius: 20px;
      }
    }
  }

  .text {
    color: #00ab55;
  }
`;
export default TodosWrapper;
