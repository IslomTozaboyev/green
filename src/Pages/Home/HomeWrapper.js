import styled from "styled-components";

const HomeWrapper = styled.div`
  overflow-x: hidden;
  .box {
    background: ${(p) => p.colors.backgroundColor};
    box-shadow: 0 0 10px ${(p) => p.colors.shadow};
    padding: 30px;
    margin: 30px;
    border-radius: 20px;
    transition: 0.5s;
  }
  .photo {
    height: 300px;
  }
  .btn {
    position: relative;
    width: 155px;
    height: 50px;
    margin: 20px;

    a {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 30px;
      color: #000;
      z-index: 1;
      font-weight: 400;
      letter-spacing: 1px;
      text-decoration: none;
      overflow: hidden;
      transition: 0.5s;
      backdrop-filter: blur(15px);
    }
  }

  .btn:hover a {
    letter-spacing: 3px;
  }

  .btn a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.15),
      transparent
    );
    transform: skewX(45deg) translateX(0);
    transition: 0.5s;
  }

  .btn:hover a::before {
    transform: skewX(45deg) translateX(200%);
  }

  .btn::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: -5px;
    width: 30px;
    height: 10px;
    background: #1eff45;
    border-radius: 10px;
    transition: 0.5s;
    transition-delay: 0s;
  }

  .btn:hover::before {
    bottom: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
    transition-delay: 0.5s;
  }

  .btn::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: -5px;
    width: 30px;
    height: 10px;
    background: #1eff45;
    border-radius: 10px;
    transition: 0.5s;
    transition-delay: 0s;
  }

  .btn:hover::after {
    top: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
    transition-delay: 0.5s;
  }

  .btn::before,
  .btn::after {
    background: #1eff45;
    box-shadow: 0 0 5px #1eff45, 0 0 15px #1eff45, 0 0 30px #1eff45,
      0 0 60px #1eff45;
  }

  .title {
    color: #00ab55;
  }

  .small__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .cards {
      position: relative;
      width: 350px;
      padding: 40px;
      background-color: ${(p) => p.colors.backgroundColor};
      box-shadow: 0 0 10px ${(p) => p.colors.shadow};
      border-radius: 4px;
      margin: 20px;
      box-sizing: border-box;
      overflow: hidden;
      text-align: center;
      transition: 0.5s;

      img {
        width: 150px;
        height: 150px;
      }

      &:before {
        content: "";
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(255, 255, 255, 0.2);
        z-index: 2;
        pointer-events: none;
      }
      .icon {
        position: relative;
        width: 50px;
        height: 50px;
        color: #fff;
        background-color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        border-radius: 50%;
        font-size: 20px;
        font-weight: 700;
        transition: 1s;
      }
      .content {
        position: relative;
        z-index: 1;
        transition: 0.5s;

        h3 {
          font-size: 20px;
          margin: 10px 0;
          padding: 0;
        }
        p {
          margin: 0;
          padding: 0;
        }
        .button {
          display: inline-block;
          padding: 10px 20px;
          background: #fff;
          border-radius: 4px;
          text-decoration: none;
          color: #000;
          font-weight: 500;
          margin-top: 20px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }
      }
      &:hover .content {
        color: #fff;
      }
    }
  }

  .cards:nth-child(1) .icon {
    box-shadow: 0 0 0 0 #e91e63;
    background: #e91e63;
  }
  .cards:nth-child(1):hover .icon {
    box-shadow: 0 0 0 400px #e91e63;
  }
  /* nth-child-2 */
  .cards:nth-child(2) .icon {
    box-shadow: 0 0 0 0 #23e629;
    background: #23e629;
  }
  .cards:nth-child(2):hover .icon {
    box-shadow: 0 0 0 400px #23e629;
  }
  /* nth-child-3 */
  .cards:nth-child(3) .icon {
    box-shadow: 0 0 0 0 #3296f3;
    background: #3296f3;
  }
  .cards:nth-child(3):hover .icon {
    box-shadow: 0 0 0 400px #3296f3;
  }
  /* nth-child-4 */
  .cards:nth-child(4) .icon {
    box-shadow: 0 0 0 0 #5e16b6;
    background: #5e16b6;
  }
  .cards:nth-child(4):hover .icon {
    box-shadow: 0 0 0 400px #5e16b6;
  }
  /* nth-child-5 */
  .cards:nth-child(5) .icon {
    box-shadow: 0 0 0 0 #ce358e;
    background: #ce358e;
  }
  .cards:nth-child(5):hover .icon {
    box-shadow: 0 0 0 400px #ce358e;
  }
`;

export default HomeWrapper;
