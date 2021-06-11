import styled from "styled-components";

const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  margin: 0;
  padding: 15px;
  overflow: hidden;
  display: flex;
  background-color: #2c0633;

  h1 {
    margin-top: 30px;
    color: white;
    font-size: 45px;
    position: absolute;
    font-weight: bold;
    left: 50%;
    transform: translateX(-50%);
  }

  #file-upload {
    height: 90px;
    width: 90px;
    align-self: center;
    cursor: pointer;
    position: relative;
  }

  #file-upload::-webkit-file-upload-button {
    visibility: hidden;
  }

  #file-upload::before {
    content: "+";
    color: white;
    font-size: 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-45%, -70%);
  }
`;

const ScreenDiv = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 10px;
  background-color: #f9f3ff;
  border: 1px solid purple;
  align-self: center;
  margin-top: 90px;
`;

const ConfigDiv = styled.div`
  width: 30%;
  /* height: 70%; */
  border-radius: 10px;
  background-color: #f9f3ff;
  border: 1px solid purple;
  margin-right: 20px;
  padding: 25px;
  color: purple;
  align-self: center;
  margin-top: 90px;

  button {
    margin-top: 30px;
  }
`;

export { MainDiv, ScreenDiv, ConfigDiv };
