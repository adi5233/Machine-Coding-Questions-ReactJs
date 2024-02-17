import React from "react";
// import Main from "./components/infinite-scroll/Main";
// import Otp from "./components/otp-frontend/Otp";
// import MultiSelectInput from "./components/multi-select-input/MultiSelectInput";
// import FileExplorer from "./components/file-explorer/FileExplorer";
// import Pagination from "./components/pagination/Pagination";
// import { SmoothScrolling } from "./components/smooth-scroll/UseLayoutEffect";
// import InfiniteComments from "./components/InfiniteComments";
// import Main from "./components/progress-bar/Main";
import Game from "./components/grid-game/Game";

const App = () => {
  return (
    <div className="">
      <div className="bg-blue-400 mx-auto text-center py-10">
        <h1 className="font-bold">Interview Questions</h1>
      </div>
      {/* <MultiSelectInput /> */}
      {/* <FileExplorer /> */}
      {/* <Pagination /> */}
      {/* <Main /> */}
      {/* <Otp /> */}
      {/* <Main /> */}
      <Game />
    </div>
  );
};

export default App;
