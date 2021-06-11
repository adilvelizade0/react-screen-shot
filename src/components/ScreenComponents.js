import React from "react";

function Lock() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );
}

function Refresh() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  );
}

function BrowserWindow(props) {
  const [file, setFile] = React.useState(null);
  const [fileBtn, setFileBtn] = React.useState(true);

  const handleFile = (event) => {
    setFile(event.target.files[0].name);
    console.log(event.target.files[0].name);
    setFileBtn(false);
  };

  console.log(document.URL);

  return (
    <div className="p-8 w-full h-full flex items-center justify-center">
      <div
        id="capture"
        className="w-full h-full overflow-hidden shadow-lg flex items-start justify-start flex-col border dark:border-gray-800 rounded-lg"
      >
        <div
          className={`w-full flex items-center justify-start relative p-1 border-b dark:border-gray-800 bg-${props.theme}`}
        >
          <div className="p-1 flex items-center justify-center">
            <div className="bg-red-500 m-1 w-3 h-3 rounded-full" />
            <div className="bg-yellow-500 m-1 w-3 h-3 rounded-full" />
            <div className="bg-green-500 m-1 w-3 h-3 rounded-full" />
          </div>
          <div className="w-full flex items-center justify-center absolute left-0">
            <a
              href={props.url}
              className="text-xs bg-gray-100 dark:bg-gray-900 w-1/2 rounded-lg py-1 flex justify-between items-center"
            >
              <div className="flex items-center justify-center pl-4">
                <span className="text-green-500 w-4 h-4 mr-2">
                  <Lock />
                </span>
                <span className="">{props.title}</span>
              </div>
              <div className="flex pr-4">
                <span className="text-gray-500 w-4 h-4">
                  <Refresh />
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="w-full h-full flex justify-center">
          {/* <iframe
            title="TaildwindCSS"
            src={props.url}
            className="w-full h-full"
            loading="eager"
          /> */}
          {/* <img className="w-full h-full" src={Screenshot} alt={"Screenshot"} /> */}

          {fileBtn ? (
            <input
              onChange={handleFile}
              type={"file"}
              id="file-upload"
              accept=".png, .jpg, .jpeg"
              className="appearance-none flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
            />
          ) : (
            <img
              className="w-full h-full"
              src={`image/${file}`}
              alt={"Screenshot"}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default BrowserWindow;
