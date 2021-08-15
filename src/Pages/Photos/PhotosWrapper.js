import styled from "styled-components";

const PhotosWrappper = styled.div`
  overflow-x: hidden;
  .photos__bg {
    background-image: ${(p) => p.colors.backgroundImage};
    color: ${(p) => p.colors.color};
  }
  .box {
    padding: 20px;
    border: 1px solid green;
    border-radius: 10px;
    text-align: center;
    height: 250px;
  }
  .photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    transform: translate(10%, -0%);
  }
  .title {
    color: #fff;
  }
`;
export default PhotosWrappper;
