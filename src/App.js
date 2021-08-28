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
  const [count, setCount] = useState(0);
  const [img, setImg] = useState(null);

  const increase = () => {
    setCount(count+1);
  }

  return (
    <div className="App">
      {/* <UseRefComponent/> */}
      <Header img={img} />
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={() => setImg(fs)}>FS</button>
      <button onClick={() => setImg(aws)}>AWS</button>

    </div>
  );
}

export default App;
