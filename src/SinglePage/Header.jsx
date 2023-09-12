import profile from "../images/profile.png";
const Header = () => {
  return (
    <div className="flex flex-col space-y-4 md:flex-row justify-between items-center mt-5 p-4 border-b-2">
      <h2 className="text-3xl font-semibold">Knowledge Cafe</h2>
      <img src={profile}></img>
    </div>
  );
};

export default Header;
