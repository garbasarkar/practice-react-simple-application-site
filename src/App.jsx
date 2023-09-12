import { useState } from "react";
import "./App.css";
import Header from "./SinglePage/Header";
import SideContext from "./SinglePage/SideContext";
import SideImage from "./SinglePage/SideImage";
import { useEffect } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState([]);
  const [times, setTime] = useState(0);

  useEffect(() => {
    fetch(`FackData.json`)
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  const HandleBtnCLick = (id) => {
    setCount([...count, id]);
  };
  const HandleTimeClick = (alltime) => {
    const newAllTime = times + alltime;
    setTime(newAllTime)
  };
  return (
    <>
      <div className="w-10/12 mx-auto">
        <Header></Header>
        <div className="flex mt-10">
          <SideImage
            images={images}
            HandleBtnCLick={HandleBtnCLick}
            HandleTimeClick={HandleTimeClick}
          ></SideImage>
          <SideContext count={count} times={times}></SideContext>
        </div>
      </div>
    </>
  );
}

export default App;
