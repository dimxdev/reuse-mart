/* eslint-disable no-constant-binary-expression */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import * as DropDownMenu from "@radix-ui/react-dropdown-menu";
import images from "../../assets/assets";
import { useAuth } from "../../context/AuthContext";
import { useWindow } from "../../context/WindowContext";
import { LogOut, Menu, ShoppingCart, User, X } from "lucide-react";
import capitalizeWord from "../../utils/capitalizeWord";
import useGetCart from "../../api/useGetCart";

function Navbar() {
  const { logout, auth } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, setCartCount, refreshWindow } = useWindow();
  const { handleGetCart } = useGetCart();

  useEffect(() => {
    if (auth.isAuthenticated && auth.user?.role === "customer") {
      handleGetCart().then((items) => setCartCount(items?.length ?? 0));
    } else {
      setCartCount(0);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.isAuthenticated, refreshWindow]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Product", path: "/product" },
    { label: "Tentang", path: "/about" },
  ];

  return (
    <div className="pr-4 pl-1 py-2 bg-white/20 fixed z-10 w-full flex items-center backdrop-blur-xs shadow-md justify-between">
      <img
        src={images.logo}
        alt=""
        className="w-30 hover:scale-110 cursor-pointer transition-all"
        onClick={() => { navigate("/"); setMobileOpen(false); }}
      />

      {/* Desktop nav links */}
      <div className="hidden md:flex gap-3 mr-3 text-tema-950 items-center">
        {navLinks.map((link) => (
          <div
            key={link.path}
            className="hover:font-bold hover:underline cursor-pointer transition-all"
            onClick={() => navigate(link.path)}
          >
            {link.label}
          </div>
        ))}
      </div>

      {/* Desktop right section */}
      <div className="hidden md:flex mr-2">
        {auth.isAuthenticated ? (
          <div className="flex items-center gap-3">
            {auth.user.role === "customer" ? (
              <div
                className="hover:bg-black/20 px-2 py-2 rounded-full hover:scale-105 transition-all cursor-pointer relative"
                onClick={() => navigate("/cart")}
              >
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold">
                    {cartCount > 99 ? "99+" : cartCount}
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

      {/* Mobile hamburger */}
      <button
        className="md:hidden mr-2 p-2 rounded-md hover:bg-black/10 transition-all"
        onClick={() => setMobileOpen((prev) => !prev)}
      >
        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-sm shadow-lg flex flex-col px-4 py-4 gap-3 md:hidden z-20">
          {navLinks.map((link) => (
            <div
              key={link.path}
              className="text-tema-950 font-medium py-2 border-b border-black/10 cursor-pointer hover:text-tema-600 transition-all"
              onClick={() => { navigate(link.path); setMobileOpen(false); }}
            >
              {link.label}
            </div>
          ))}

          {auth.isAuthenticated ? (
            <div className="flex flex-col gap-2 pt-1">
              <div className="text-tema-950 font-bold">{capitalizeWord(auth.user.name)}</div>
              <div className="text-tema-600 text-xs mb-1">{auth.user.email}</div>
              {auth.user.role === "customer" && (
                <button
                  className="flex items-center gap-2 text-tema-950 py-2 cursor-pointer hover:text-tema-600 transition-all"
                  onClick={() => { navigate("/cart"); setMobileOpen(false); }}
                >
                  <div className="relative">
                    <ShoppingCart className="w-5 h-5" />
                    {cartCount > 0 && (
                      <div className="absolute -top-1.5 -right-1.5 bg-red-500 text-white w-4 h-4 flex items-center justify-center rounded-full text-[10px] font-bold">
                        {cartCount > 99 ? "99+" : cartCount}
                      </div>
                    )}
                  </div>
                  Keranjang
                  {cartCount > 0 && (
                    <span className="ml-auto text-xs bg-red-100 text-red-600 font-bold px-1.5 py-0.5 rounded-full">
                      {cartCount}
                    </span>
                  )}
                </button>
              )}
              <button
                className="flex items-center gap-2 text-tema-950 py-2 cursor-pointer hover:text-tema-600 transition-all"
                onClick={() => { navigate(`/dashboard/${auth.user.role}`); setMobileOpen(false); }}
              >
                <User className="w-5 h-5" /> Dashboard
              </button>
              <button
                className="flex items-center gap-2 text-red-600 py-2 cursor-pointer hover:text-red-800 transition-all"
                onClick={() => { logout(); setMobileOpen(false); }}
              >
                <LogOut className="w-5 h-5" /> Logout
              </button>
            </div>
          ) : (
            <button
              className="bg-tema-400 text-white px-4 py-2 rounded-md font-bold hover:bg-tema-600 transition-all cursor-pointer mt-1"
              onClick={() => { navigate("/login"); setMobileOpen(false); }}
            >
              Login
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
