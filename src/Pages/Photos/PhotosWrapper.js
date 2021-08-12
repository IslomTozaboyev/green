import styled from "styled-components";

const PhotosWrappper = styled.div`
  .photos__bg {
    background-image: linear-gradient(
      to right top,
      #26caa5,
      #00ce91,
      #00d078,
      #19d257,
      #3fd229
    );
    color: white;
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
