import styled from "styled-components";

const padding = "20px";
const ContainerWrapper = styled.div`
  display: flex;

  .sidebar {
    width: 300px;
    padding: ${padding};
    background-color: ${(p) => p.colors.backgroundColor};
    color: ${(p) => p.colors.color};
    height: 100vh;
    position: sticky;
    top: 0;
    overflow-y: auto;
    transition: 0.5s;

    &.show {
      width: 100px;
    }
    ul.menu {
      li {
        a {
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
    background: ${(p) => p.colors.backgroundColor};
  }
  .btnn {
    padding: 12px;
    background-color: #c8facd;
    box-shadow: 0 0 10px ${(p) => p.colors.shadow};
    &:hover {
      background-color: #00ab55 !important;
      color: white !important;
    }
  }
  .rightside {
    flex: 1;
    overflow-y: auto;
    background: ${(p) => p.colors.backgroundColor};
    transition: 0.5s;
    .icon {
      background: ${(p) => p.colors.backgroundColor};
      color: ${(p) => p.colors.color};
      box-shadow: 0 0 10px ${(p) => p.colors.shadow};
    }

    header {
      position: sticky;
      top: 0;
      background: ${(p) => p.colors.backgroundColor};
      box-shadow: 0 0 10px ${(p) => p.colors.shadow};
      transition: 0.5s;
      z-index: 1000;

      .logo {
        height: 40px;
      }
    }
  }
`;
export default ContainerWrapper;
