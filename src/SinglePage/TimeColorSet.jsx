// import { useEffect, useState } from "react";

// const TimeColorSet = () => {
//   const [count, setCount] = useState(new Date());
//   const [time, setTime] = useState("black");
//   useEffect(() => {
//     const time = setInterval(() => {
//       setCount(new Date());
//     }, 1000);
//     return () => {
//       clearInterval(time);
//     };
//   }, []);
//   const handleTime = (event) => {
//     setTime(event.terget.value);
//   };

//   return <div>
//     <p>time {" "}
//     <select value={time} onClick={handleTime}>
//         <option value="red">red</option>
//     </select>
//     </p>
//     <h3>{time.toLocalTimestring()}</h3>
//   </div>
// };

// export default TimeColorSet;
