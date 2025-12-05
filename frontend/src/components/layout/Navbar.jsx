import images from "../../assets/assets";

function Navbar() {
  return (
    <div className="pr-4 pl-1 py-2 bg-white/60 fixed z-10 w-full flex items-center">
      <img
        src={images.logo}
        alt=""
        className="w-30 hover:scale-110 cursor-pointer transition-all"
      />
      <div>Navbar</div>
    </div>
  );
}

export default Navbar;
