import { BiCheck } from "react-icons/bi";

function Plane() {
   return (
      <>
         <div className="container mx-auto py-16 px-6">
            <div className="text-center">
               <h3 className="text-3xl md:text-5xl font-medium py-6">Choose Your Plan</h3>
               <p className="text-lg md:text-xl text-gray-600 mt-5">
                  Let's choose the package that is best for you and explore it happily and cheerfully.
               </p>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-14">
                  {/* Free Plan Card */}
                  <div className="border-2 border-[#2FAB73] hover:border-[#F53838] py-10 rounded-xl">
                     <img className="mx-auto opacity-90 w-48 sm:w-60" src="/public/Premium.png" alt="Free Plan" />
                     <h3 className="text-2xl sm:text-3xl font-bold text-center mt-8">Free Plan</h3>

                     <ul className="flex items-center justify-center mt-6 gap-2">
                        <BiCheck className="text-[#2FAB73] text-2xl" />
                        <li>Unlimited Bandwidth</li>
                     </ul>
                     <ul className="flex items-center justify-center mt-4 gap-2">
                        <BiCheck className="text-[#2FAB73] text-2xl" />
                        <li>Works on All Devices</li>
                     </ul>
                     <ul className="flex items-center justify-center mt-4 gap-2">
                        <BiCheck className="text-[#2FAB73] text-2xl" />
                        <li>Encrypted Connection</li>
                     </ul>

                     <h3 className="py-6 text-3xl sm:text-4xl font-bold text-center">$9 / mo</h3>

                     <button className="py-[9px] hover:bg-[#F53855] hover:text-white text-[#F53855] font-bold px-16 rounded-4xl border border-[#F53855]">
                        Select
                     </button>
                  </div>

                  {/* Same Card for Other Plans */}
                  <div className="border-2 border-[#2FAB73] hover:border-[#F53838] py-10 rounded-xl">
                     <img className="mx-auto opacity-90 w-48 sm:w-60" src="/public/Premium.png" alt="Premium Plan" />
                     <h3 className="text-2xl sm:text-3xl font-bold text-center mt-8">Premium Plan</h3>

                     <ul className="flex items-center justify-center mt-6 gap-2">
                        <BiCheck className="text-[#2FAB73] text-2xl" />
                        <li>Unlimited Bandwidth</li>
                     </ul>
                     <ul className="flex items-center justify-center mt-4 gap-2">
                        <BiCheck className="text-[#2FAB73] text-2xl" />
                        <li>Works on All Devices</li>
                     </ul>
                     <ul className="flex items-center justify-center mt-4 gap-2">
                        <BiCheck className="text-[#2FAB73] text-2xl" />
                        <li>Encrypted Connection</li>
                     </ul>

                     <h3 className="py-6 text-3xl sm:text-4xl font-bold text-center">$19 / mo</h3>

                     <button className="py-[9px] hover:bg-[#F53855] hover:text-white text-[#F53855] font-bold px-16 rounded-4xl border border-[#F53855]">
                        Select
                     </button>
                  </div>

                  {/* Another Plan Card */}
                  <div className="border-2 border-[#2FAB73] hover:border-[#F53838] py-10 rounded-xl">
                     <img className="mx-auto opacity-90 w-48 sm:w-60" src="/public/Premium.png" alt="Ultimate Plan" />
                     <h3 className="text-2xl sm:text-3xl font-bold text-center mt-8">Ultimate Plan</h3>

                     <ul className="flex items-center justify-center mt-6 gap-2">
                        <BiCheck className="text-[#2FAB73] text-2xl" />
                        <li>Unlimited Bandwidth</li>
                     </ul>
                     <ul className="flex items-center justify-center mt-4 gap-2">
                        <BiCheck className="text-[#2FAB73] text-2xl" />
                        <li>Works on All Devices</li>
                     </ul>
                     <ul className="flex items-center justify-center mt-4 gap-2">
                        <BiCheck className="text-[#2FAB73] text-2xl" />
                        <li>Encrypted Connection</li>
                     </ul>

                     <h3 className="py-6 text-3xl sm:text-4xl font-bold text-center">$29 / mo</h3>

                     <button className="py-[9px] hover:bg-[#F53855] hover:text-white text-[#F53855] font-bold px-16 rounded-4xl border border-[#F53855]">
                        Select
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Plane;
