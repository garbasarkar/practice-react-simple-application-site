import SideSingleIm from "./SideSingleIm";

const SideImage = ({ images , HandleBtnCLick,  HandleTimeClick }) => {
  return (
    <div className="w-2/3">
      <h3 className="text-3xl font-semibold mb-5">
        Side Image: {images.length}
      </h3>
      {images.map((itemIg) => (
        <SideSingleIm key={itemIg.id} singleImage={itemIg} HandleBtnCLick={HandleBtnCLick}  HandleTimeClick={HandleTimeClick}></SideSingleIm>
      ))}
    </div>
  );
};

export default SideImage;
