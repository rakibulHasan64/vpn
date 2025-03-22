function Banner() {
   return (
      <div className="container mx-auto py-20 px-4">
         <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Side: Text */}
            <div className="space-y-6 text-center md:text-left md:w-1/2">
               <h3 className="text-4xl md:text-6xl font-semibold leading-tight">
                  Want anything to be<br />easy with LaslesVPN.
               </h3>
               <p className="text-lg md:text-xl text-gray-500">
                  Provide a network for all your needs with ease and fun using LaslesVPN.<br />
                  Discover interesting features from us.
               </p>
               <button className="py-3 rounded-md px-8 text-lg bg-[#F53838] text-white">
                  Get Started
               </button>
            </div>

            {/* Right Side: Image */}
            <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
               <img className="w-[80%] md:w-[450px] lg:w-[500px]" src="/Illustration 1.png" alt="VPN Illustration" />
            </div>
         </div>
      </div>
   );
}

export default Banner;
