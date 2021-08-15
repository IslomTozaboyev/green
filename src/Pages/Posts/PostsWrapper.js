import styled from "styled-components";

const PostsWrapper = styled.div`
  .small__container {
    display: flex;
    flex-wrap: wrap !important;
    justify-content: space-between;
    .cards {
      position: relative;
      width: 320px;
      height: 440px;
      box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.05),
        inset -5px -5px 5px rgba(255, 255, 255, 0.5),
        5px 5px 5px rgba(0, 0, 0, 0.05), -5px -5px 5px rgba(255, 255, 255, 0.5);
      border-radius: 15px;
      margin: 30px;

      &:hover .box {
        transform: translateY(-50px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        background: linear-gradient(45deg, #03a9f4, #00ab55);
      }

      .box {
        position: absolute;
        top: 20px;
        bottom: 20px;
        left: 20px;
        right: 20px;
        background-color: #ebf5fc;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.5s;

        .content {
          padding: 20px;
          text-align: center;

          h2 {
            position: absolute;
            top: -10px;
            right: 30px;
            font-size: 8em;
            color: rgba(0, 0, 0, 0.05);
            transition: 0.5s;
            pointer-events: none;
          }
          h3 {
            font-size: 1.8em;
            color: #777;
            z-index: 1000;
            transition: 0.5s;
          }
          p {
            font-size: 1rem;
            color: #777;
            font-weight: 300;
            transition: 0.5s;
            z-index: 1;
          }
          .button {
            position: relative;
            display: inline-block;
            padding: 8px 20px;
            background: linear-gradient(#03a9f4, #ebf5fc);
            margin-top: 15px;
            border-radius: 20px;
            color: #fff;
            text-decoration: none;
            font-weight: 400;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.02);
          }
        }
      }
    }
  }

  .cards:hover .box .content h3,
  .cards:hover .box .content p {
    color: #fff;
  }
  .cards:hover .box .content h2 {
    color: rgba(0, 0, 0, 0.5);
  }
`;
export default PostsWrapper;
