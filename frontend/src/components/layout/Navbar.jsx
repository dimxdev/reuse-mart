/* eslint-disable no-constant-binary-expression */
import { useNavigate } from "react-router";
import * as DropDownMenu from "@radix-ui/react-dropdown-menu";
import images from "../../assets/assets";
import { useAuth } from "../../context/AuthContext";
import { LogOut, ShoppingCart, User } from "lucide-react";
import capitalizeWord from "../../utils/capitalizeWord";

function Navbar() {
  const { logout, auth } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="pr-4 pl-1 py-2 bg-white/20 fixed z-10 w-full flex items-center backdrop-blur-xs shadow-md justify-between">
      <img
        src={images.logo}
        alt=""
        className="w-30 hover:scale-110 cursor-pointer transition-all"
        onClick={() => navigate("/")}
      />
      <div className="flex gap-3 mr-3 text-tema-950 items-center">
        <div
          className="hover:font-bold hover:underline cursor-pointer transition-all"
          onClick={() => navigate("/")}
        >
          Home
        </div>
        <div
          className="hover:font-bold hover:underline cursor-pointer transition-all"
          onClick={() => navigate("/product")}
        >
          Product
        </div>
        <div
          className="hover:font-bold hover:underline cursor-pointer transition-all"
          onClick={() => navigate("/about")}
        >
          Tentang
        </div>
      </div>

      <div className="mr-2">
        {auth.isAuthenticated ? (
          <div className="flex items-center gap-3">
            {auth.user.role === "customer" ? (
              <div
                className="hover:bg-black/20 px-2 py-2 rounded-full hover:scale-105 transition-all cursor-pointer relative"
                onClick={() => navigate("/cart")}
              >
                <ShoppingCart className="w-6 h-6" />
                {false && (
                  <div className="absolute -top-2 -right-2 bg-tema-300 px-3 py-1 rounded-full text-xs animate-pulse text-tema-950 font-bold transition-all duration-100">
                    !
                  </div>
                )}
              </div>
            ) : (
              <div></div>
            )}

            <DropDownMenu.Root>
              <DropDownMenu.Trigger>
                <div className="bg-tema-300 px-3 py-3 rounded-full hover:bg-white/50 transition-all hover:scale-105 shadow-xl group cursor-pointer hover:border hover:border-black/50">
                  <User className="text-white group-hover:text-black/80 transition-all w-5 h-5" />
                </div>
              </DropDownMenu.Trigger>

              <DropDownMenu.Portal>
                <DropDownMenu.Content
                  className="animate-scale-in relative z-10 bg-white/70 px-2 py-2 mr-5 rounded-md shadow-xl border border-black/10 text-tema-950 w-45"
                  sideOffset={10}
                >
                  <div className="hover:outline-none px-2 text-xl font-bold">
                    {capitalizeWord(auth.user.name)}
                  </div>

                  <div className="hover:outline-none text-tema-600 px-2 text-xs">
                    {auth.user.email}
                  </div>

                  <DropDownMenu.Separator className="m-[5px] h-px bg-black" />
                  <DropDownMenu.Item>
                    <div
                      className="cursor-pointer hover:outline-none hover:bg-tema-400 transition-all rounded-md px-2 py-1 text-sm flex items-center"
                      onClick={() => navigate(`/dashboard/${auth.user.role}`)}
                    >
                      <User className="w-4 h-3 mr-1" />
                      Dashboard
                    </div>
                  </DropDownMenu.Item>
                  <DropDownMenu.Item>
                    <div
                      className="cursor-pointer hover:outline-none hover:bg-tema-400 transition-all rounded-md px-2 py-1 text-sm flex items-center"
                      onClick={logout}
                    >
                      <LogOut className="w-4 h-3 mr-1" />
                      Logout
                    </div>
                  </DropDownMenu.Item>
                </DropDownMenu.Content>
              </DropDownMenu.Portal>
            </DropDownMenu.Root>
          </div>
        ) : (
          <div
            className="bg-white px-4 py-2 rounded-md hover:font-bold cursor-pointer text-tema-950 hover:bg-white/50 shadow-md"
            onClick={() => navigate("/login")}
          >
            Login
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
