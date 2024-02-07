import React from "react";
// import MultiSelectInput from "./components/multi-select-input/MultiSelectInput";
import FileExplorer from "./components/file-explorer/FileExplorer";
import Pagination from "./components/pagination/Pagination";
// import { SmoothScrolling } from "./components/smooth-scroll/UseLayoutEffect";
// import InfiniteComments from "./components/InfiniteComments";

const App = () => {
  return (
    <div className="bg-slate-50">
      <div className="bg-blue-400 mx-auto text-center py-10">
        <h1 className="font-bold">Interview Questions</h1>
      </div>
      {/* <MultiSelectInput /> */}
      {/* <FileExplorer /> */}
      <Pagination />
    </div>
  );
};

export default App;
