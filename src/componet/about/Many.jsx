import { BiCheck } from "react-icons/bi";

function Many() {
   return (
      <div className="bg-gray-100 py-16 px-6">
         <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-around gap-10">

               {/* Image */}
               <div className="flex justify-center">
                  <img className="w-[350px] md:w-[450px] lg:w-[500px]" src="/public/Illustration 2.png" alt="Illustration" />
               </div>

               {/* Text & Features */}
               <div className="space-y-6 text-center lg:text-left">
                  <h2 className="text-3xl md:text-5xl font-semibold">
                     We Provide Many <br className="hidden md:block" /> Features You Can Use
                  </h2>
                  <p className="text-lg text-gray-600">
                     You can explore the features that we provide with fun and <br className="hidden md:block" />
                     have their own functions each feature.
                  </p>

                  {/* Features List */}
                  <div className="space-y-5">
                     {[
                        "Powerful online protection.",
                        "Internet without borders.",
                        "Supercharged VPN.",
                        "No specific time limits."
                     ].map((feature, index) => (
                        <div key={index} className="flex items-center justify-center lg:justify-start gap-3">
                           <div className="bg-[#2FAB73] text-white rounded-full w-[30px] h-[30px] flex items-center justify-center">
                              <BiCheck size={20} />
                           </div>
                           <span className="text-md font-medium">{feature}</span>
                        </div>
                     ))}
                  </div>
               </div>

            </div>
         </div>
      </div>
   );
}

export default Many;
