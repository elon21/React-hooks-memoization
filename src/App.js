import UseRefComponent from "./components/UseRefComponent";

import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import fs from "./assets/fs.png";
import aws from "./assets/aws.png";
import axios from "axios";

function App() {

  return (
    <div className="App">
      <UseRefComponent/>
    </div>
  );
}

export default App;
