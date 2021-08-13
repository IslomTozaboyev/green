import styled from "styled-components";

const padding = "20px";
const ContainerWrapper = styled.div`
  display: flex;

  .sidebar {
    width: 300px;
    padding: ${padding};
    background-color: #fff;
    height: 100vh;
    position: sticky;
    top: 0;
    display: none;
    ul.menu {
      li {
        a {
          padding: 10px 20px;
          border-radius: 15px;
          margin-bottom: 10px;
          display: block !important;
          transition: 0.3s;
          color: #000;
        }
        .active {
          background-color: #00ab55;
          color: white !important;
        }
      }
    }
  }
  .secondary {
    background: #f2f3f5;
  }
  .btnn {
    padding: 12px;
    background-color: #c8facd;
  }
  .rightside {
    flex: 1;

    header {
      position: sticky;
      top: 0;
      background-color: #fff;
      z-index: 1000;

      .logo {
        height: 40px;
      }
    }
    .content {
      padding: ${padding};
    }
  }
`;
export default ContainerWrapper;
