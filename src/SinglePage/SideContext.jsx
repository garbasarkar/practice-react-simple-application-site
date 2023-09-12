import SideTextDe from "./SideTextDe";
import "../index.css";

const SideContext = ({ count, times }) => {
  // console.log(images);
  // console.log(times);
  return (
    <div className="w-1/3 box_container ml-5 mt-14 p-5 h-full pb-20">
      <div>
        <h5 className="text-xl text-white mb-2">Spent Time on Read: {times}</h5>
      </div>
      <h3 className="text-3xl text-white font-semibold ">
        Side Context {count.length}
      </h3>
      {count.map((item) => (
        <h3 className="text-xl bg-gray-300 mb-3 p-3 rounded mt-5" key={item.id}>
          {item.name}
        </h3>
      ))}
    </div>
  );
};

export default SideContext;
