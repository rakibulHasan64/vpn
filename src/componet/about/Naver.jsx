import { useState } from "react";
import { Menu, X } from "lucide-react";

function Naver() {
   const [toggle, setToggle] = useState(false);

   return (
      <nav className="container mx-auto p-4">
         <div className="flex justify-between items-center">
            {/* Left: Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setToggle(!toggle)}>
               {toggle ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Center: Logo */}
            <div className="flex items-center gap-1">
               <img className="w-[30px] h-[30px]" src="/public/Vector.png" alt="Logo" />
               <strong className="text-[17px]">LaslesVPN</strong>
            </div>

            {/* Right: Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
               <a className="text-gray-600 font-semibold text-[16px]" href="#">About</a>
               <a className="text-gray-600 font-semibold text-[16px]" href="#">Pricing</a>
               <a className="text-gray-600 font-semibold text-[16px]" href="#">Testimonials</a>
               <a className="text-gray-600 font-semibold text-[16px]" href="#">Help</a>
            </div>

            {/* Right: Sign In & Sign Up */}
            <div className="hidden md:flex items-center gap-4">
               <a className="text-gray-600 font-bold text-[16px]" href="#">Sign In</a>
               <button className="py-[9px] hover:bg-[#F53855] hover:text-white text-[#F53855] font-bold px-6 rounded-4xl border border-[#F53855]">
                  Sign Up
               </button>
            </div>
         </div>

         {/* Mobile Menu (Sidebar from Left) */}
         <div className={`fixed top-0 left-0 w-[250px] h-full bg-white shadow-lg z-50 transform ${toggle ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:hidden`}>
            <button className="absolute top-4 left-4" onClick={() => setToggle(false)}>
               <X size={28} />
            </button>
            <div className="flex flex-col items-start gap-4 p-6 mt-10">
               <a className="text-gray-600 font-semibold text-[16px]" href="#">About</a>
               <a className="text-gray-600 font-semibold text-[16px]" href="#">Pricing</a>
               <a className="text-gray-600 font-semibold text-[16px]" href="#">Testimonials</a>
               <a className="text-gray-600 font-semibold text-[16px]" href="#">Help</a>
               <a className="text-gray-600 font-bold text-[16px]" href="#">Sign In</a>
               <button className="py-[9px] w-full hover:bg-[#F53855] hover:text-white text-[#F53855] font-bold px-6 rounded-4xl border border-[#F53855]">
                  Sign Up
               </button>
            </div>
         </div>
      </nav>
   );
}

export default Naver;
