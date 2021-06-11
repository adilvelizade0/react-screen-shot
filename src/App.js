import React from "react";
import "tailwindcss/dist/tailwind.css";
import ScreenComponents from "./components/ScreenComponents";
import { ConfigDiv, MainDiv, ScreenDiv } from "./style/style";
import html2canvas from "html2canvas";

function App() {
  const [url, setUrl] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [theme, setTheme] = React.useState("white");

  function is_url(str) {
    const regexp =
      /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(str)) {
      return true;
    } else {
      return false;
    }
  }

  const handleInput = (e) => {
    if (is_url(e.target.value)) {
      setUrl(e.target.value);
    }
    if (e.target.value === "") {
      setUrl("");
    }
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleTheme = () => {
    setTheme(theme === "white" ? "black" : "white");
  };

  const capture = () => {
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      // document.querySelector("#open-image").appendChild(canvas);
      const a = document.createElement("a");
      a.href = canvas
        .toDataURL("image/jpeg")
        .replace("image/jpeg", "image/octet-stream");
      a.download = "download.jpg";
      a.click();
    });
    // document.querySelector("#open-image").style.display = "flex";
    setTitle("");
    setUrl("");
    setTheme("white");
  };

  return (
    <>
      <MainDiv>
        <h1>👁 Screen Shot Generator</h1>

        <ConfigDiv>
          <h3 className="mb-2 ml-1 ">Web Address</h3>
          <input
            value={url}
            onChange={handleInput}
            placeholder="https://www.example.com"
            className="flex-1 appearance-none border border-transparent w-full py-2 px-4 shadow-md bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
          <h3 className="mb-2 mt-4 ml-1 ">Title</h3>
          <input
            value={title}
            onChange={handleTitle}
            className="flex-1 appearance-none border border-transparent w-full py-2 px-4 shadow-md bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />

          <h3 className="mb-2 mt-4 ml-1 ">Theme</h3>
          <select
            id="theme"
            name="theme"
            autoComplete="theme"
            className="flex-1 appearance-none mt-1  w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={handleTheme}
          >
            <option>Light</option>
            <option>Dark</option>
          </select>

          <button
            type={"button"}
            onClick={capture}
            className="flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
          >
            Screen Shot
          </button>
        </ConfigDiv>
        <ScreenDiv>
          <ScreenComponents url={url} title={title} theme={theme} />
        </ScreenDiv>
        {/* <div
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "#222",

            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            display: "none",
            justifyContent: "center",
            alignItems: "center",
          }}
          id="open-image"
        ></div> */}
      </MainDiv>
    </>
  );
}

export default App;
