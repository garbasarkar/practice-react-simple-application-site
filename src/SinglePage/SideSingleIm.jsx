import { FaBeer } from "react-icons/fa";
const SideSingleIm = ({ singleImage, HandleBtnCLick, HandleTimeClick }) => {
//   console.log(singleImage);
  const { cover_img, id, name, author, author_img, hashtags, date, time } =
    singleImage;
//   console.log(singleImage);
  return (
    <div>
      <img src={singleImage.cover_img}></img>
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-4 items-center mt-5">
          <img className="w-14" src={singleImage.author_img}></img>
          <div>
            <h3 className="text-lg font-semibold">{singleImage.author}</h3>
            <small>{singleImage.date}(14 Days age)</small>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <small>{singleImage.time} min read</small>
          <button onClick={() => HandleBtnCLick(singleImage)}>
            <FaBeer></FaBeer>
          </button>
        </div>
      </div>
      <h2 className="text-2xl font-semibold">{singleImage.name}</h2>
      <h5>{singleImage.hashtags}</h5>
      <button onClick={() => HandleTimeClick(time)}
        className="text-blue-500 underline font-bold mb-14"
      >
        Mark as read
      </button>
    </div>
  );
};

export default SideSingleIm;
