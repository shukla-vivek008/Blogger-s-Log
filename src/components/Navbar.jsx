import { useState } from "react";
import { ImageKitProvider } from "@imagekit/react";
import Img from "./Img.jsx";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Image */}
      <Link to={"/"} className="flex items-center gap-4 text-2xl font-bold">
        <ImageKitProvider
          urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
          publickey={import.meta.env.VITE_IK_PUBLIC_KEY}
        >
          <Img src="https://ik.imagekit.io/sanxvtlpw/logo.png?updatedAt=1770908300380" w={32} h={32} alt="Blogger's Log" />
        </ImageKitProvider>
        <span>Blogger's Log</span>
      </Link>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "x" : "≡"}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen flex flex-col gap-10 items-center justify-center absolute top-16 bg-[#e6e6ff] transition-all ease-in-out ${open ? "-right-0" : "-right-[100%] "}`}
        >
          <Link to="/">Home</Link>
          <Link to="/">Treanding </Link>
          <Link to="/">Most Popular </Link>
          <Link to="/">About </Link>
          <Link to="">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Log In👋
            </button>
          </Link>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Treanding </Link>
        <Link to="/">Most Popular </Link>
        <Link to="/">About </Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Log In👋
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
