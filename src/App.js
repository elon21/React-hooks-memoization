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

  const [users, setUsers] = useState([]);
  console.log('users', users)

  const increase = () => {
    setCount(count+1);
  }

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => setUsers(res.data));
  }, [])

  return (
    <div className="App">
      {/* <UseRefComponent/> */}
      {/* <Header img={img} />
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={() => setImg(fs)}>FS</button>
      <button onClick={() => setImg(aws)}>AWS</button> */}
      <Users users={users} />


    </div>
  );
}

export default App;
