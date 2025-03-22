import { BsFillPersonFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { RiServerFill } from "react-icons/ri";

function Datils() {
   return (
      <div className="container mx-auto py-16 px-4 lg:rotate-2">
         <div className="py-14 bg-white shadow-2xl rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
               {/* Users */}
               <div className="flex flex-col md:flex-row items-center justify-center gap-5 border-b md:border-b-0 md:border-r-2 pb-6 md:pb-0">
                  <div className="flex items-center justify-center text-xl w-[65px] h-[65px] bg-[#FFECEC] rounded-full">
                     <BsFillPersonFill className="text-[#F53838]" />
                  </div>
                  <div>
                     <h3 className="text-3xl font-bold">90+</h3>
                     <p className="text-xl">Users</p>
                  </div>
               </div>

               {/* Locations */}
               <div className="flex flex-col md:flex-row items-center justify-center gap-5 border-b md:border-b-0 md:border-r-2 pb-6 md:pb-0">
                  <div className="flex items-center justify-center text-xl w-[65px] h-[65px] bg-[#FFECEC] rounded-full">
                     <GoLocation className="text-[#F53838]" />
                  </div>
                  <div>
                     <h3 className="text-3xl font-bold">30+</h3>
                     <p className="text-xl">Locations</p>
                  </div>
               </div>

               {/* Servers */}
               <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                  <div className="flex items-center justify-center text-xl w-[65px] h-[65px] bg-[#FFECEC] rounded-full">
                     <RiServerFill className="text-[#F53838]" />
                  </div>
                  <div>
                     <h3 className="text-3xl font-bold">50+</h3>
                     <p className="text-xl">Servers</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Datils;
