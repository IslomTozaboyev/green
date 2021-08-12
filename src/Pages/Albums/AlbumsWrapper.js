import styled from "styled-components";

const AlbumsWrapper = styled.div`
  .box {
    background-color: #c8facd;
    height: 200px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
  }
  .bg_icon {
    padding: 20px;
    border-radius: 50%;
    background-color: #a5e4b8;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 !important;
    position: absolute;
    top: 10px;
    left: 42%;
  }
  .title {
    color: #005249;
  }
  .subtitle {
    color: #4a907a;
  }
`;
export default AlbumsWrapper;
