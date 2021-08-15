import styled from "styled-components";

const AlbumsWrapper = styled.div`
  .bigCard {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .cards {
      position: relative;
      width: 280px;
      height: 370px;
      background-color: #fff;
      margin: 20px;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
      transition: 0.5s;
      box-shadow: 0 0 10px ${(p) => p.colors.shadow};
      .content {
        position: absolute;
        bottom: 10px;
        padding: 20px;
        text-align: center;
        .button {
          position: relative;
          display: inline-block;
          padding: 10px 20px;
          background-color: #52b788;
          color: #fff;
          border-radius: 40px;
          text-decoration: none;
          margin-top: 20px;
        }
        p {
          color: #666;
        }
      }
      .circle {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: #52b788;
        clip-path: circle(150px at center 0);
        text-align: center;
        h1 {
          color: #fff;
          margin: 0 30px;
          font-size: 4.5rem;
        }
      }
    }
    &:hover .cards {
      filter: blur(10px);
      transform: scale(0.9);
      opacity: 0.5;
      &:hover {
        filter: blur(0px);
        transform: scale(1.1);
        opacity: 1;
      }
    }
  }
  .cards:nth-child(1) .circle,
  .cards:nth-child(1) .content a {
    background-color: #52b788;
  }
`;
export default AlbumsWrapper;
